const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");

// Configure AWS region
AWS.config.update({ region: "ap-south-1" });
const dynamoDB = new AWS.DynamoDB.DocumentClient();

/**
 * Helper function to split large array into smaller chunks
 */
function chunkArray(arr, size) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

/**
 * Batch write to DynamoDB
 */
async function batchWrite(params) {
  try {
    await dynamoDB.batchWrite(params).promise();
  } catch (err) {
    console.error("❌ Error in batchWrite:", err);
  }
}

/**
 * Convert string values with commas into arrays.
 * Example: "red, blue, green" → ["red", "blue", "green"]
 */
function parseMultiValueColumns(item) {
  const parsedItem = {};

  for (const [key, value] of Object.entries(item)) {
    if (typeof value === "string" && value.includes(",")) {
      const values = value
        .split(",")
        .map((v) => v.trim())
        .filter((v) => v.length > 0);

      parsedItem[key] = values; // store as array
    } else {
      parsedItem[key] = value;
    }
  }

  return parsedItem;
}

/**
 * Upload XLSX data to DynamoDB
 */
async function uploadXlsxToDynamoDB(tableName, fileName, partitionKey, sortKey = null) {
  const filePath = path.join(__dirname, "data", fileName);

  if (!fs.existsSync(filePath)) {
    throw new Error(`❌ File not found: ${filePath}`);
  }

  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const rawItems = XLSX.utils.sheet_to_json(sheet);

  if (rawItems.length === 0) {
    console.warn("⚠️ No data found in the Excel sheet.");
    return;
  }

  const items = rawItems.map((raw) => {
    const item = parseMultiValueColumns(raw);

    // Validate partition key
    if (!item[partitionKey]) {
      throw new Error(
        `❌ Missing partition key "${partitionKey}" in item: ${JSON.stringify(item)}`
      );
    }

    // Validate sort key if provided
    if (sortKey && !item[sortKey]) {
      throw new Error(
        `❌ Missing sort key "${sortKey}" in item: ${JSON.stringify(item)}`
      );
    }

    // Ensure partition key is string
    item[partitionKey] = String(item[partitionKey]);
    if (sortKey) item[sortKey] = String(item[sortKey]);

    return item;
  });

  console.log(`📦 Preparing to upload ${items.length} items to "${tableName}"`);

  const chunks = chunkArray(items, 25);

  for (const [index, chunk] of chunks.entries()) {
    const requestItems = {
      RequestItems: {
        [tableName]: chunk.map((item) => ({
          PutRequest: { Item: item },
        })),
      },
    };

    console.log(`🚀 Uploading batch ${index + 1} of ${chunks.length}`);
    await batchWrite(requestItems);
  }

  console.log("✅ Upload complete!");
}

/**
 * CLI Entry Point
 */
const [,, tableName, fileName, partitionKey, sortKey] = process.argv;

if (!tableName || !fileName || !partitionKey) {
  console.error(
    "❗ Usage: node upload-xlsx-to-table.js <TableName> <FileName> <PartitionKey> [SortKey]"
  );
  process.exit(1);
}

uploadXlsxToDynamoDB(tableName, fileName, partitionKey, sortKey)
  .catch((err) => console.error("❌ Upload failed:", err));
  
// Note:- table should be exist in dynamodb before running this script and file should be in data folder
// Run below command to upload data:
// node upload-xlsx-to-table2.js <TableName> <FileName> <PartitionKey> [SortKey]
// node upload-xlsx-to-table2.js products-v2 products_list.xlsx product_id