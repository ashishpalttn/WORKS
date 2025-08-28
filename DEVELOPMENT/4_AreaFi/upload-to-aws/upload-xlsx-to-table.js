const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");

// Configure AWS region
AWS.config.update({ region: "ap-south-1" });

const dynamoDB = new AWS.DynamoDB.DocumentClient();

async function batchWrite(params) {
  try {
    await dynamoDB.batchWrite(params).promise();
  } catch (err) {
    console.error("❌ Error in batchWrite:", err);
  }
}

function chunkArray(arr, size) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

async function uploadXlsxToDynamoDB(tableName, fileName, partitionKey, sortKey = null) {
  const filePath = path.join(__dirname, "data", fileName);
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const items = XLSX.utils.sheet_to_json(sheet);

  // Validate that each item contains the required keys
  for (const item of items) {
    if (!item[partitionKey]) {
      throw new Error(`❌ Missing partition key \"${partitionKey}\" in item: ${JSON.stringify(item)}`);
    }
    if (sortKey && !item[sortKey]) {
      throw new Error(`❌ Missing sort key \"${sortKey}\" in item: ${JSON.stringify(item)}`);
    }
    // Convert partition key to string
    item[partitionKey] = String(item[partitionKey]);
    // Debug log to check data types
    console.log(`🔍 Item ID: ${item[partitionKey]} (Type: ${typeof item[partitionKey]})`);
  }

  console.log("🔍 Items to upload:", items); // Debug log to inspect items

  const chunks = chunkArray(items, 25); // Max batch size is 25

  for (const [index, chunk] of chunks.entries()) {
    const requestItems = {
      RequestItems: {
        [tableName]: chunk.map((item) => ({
          PutRequest: { Item: item },
        })),
      },
    };

    console.log(`🚀 Uploading batch ${index + 1} of ${chunks.length}`);
    console.log("🔍 Batch content:", JSON.stringify(requestItems, null, 2)); // Debug log for batch content
    await batchWrite(requestItems);
  }

  console.log("✅ Upload complete!");
}

// Pass args: node upload-xlsx-to-table.js <TableName> <FileName> <PartitionKey> [SortKey]
const [,, tableName, fileName, partitionKey, sortKey] = process.argv;

if (!tableName || !fileName || !partitionKey) {
  console.error("❗ Usage: node upload-xlsx-to-table.js <TableName> <FileName> <PartitionKey> [SortKey]");
  process.exit(1);
}

uploadXlsxToDynamoDB(tableName, fileName, partitionKey, sortKey);

// Note:- table should be exist in dynamodb before running this script and file should be in data folder
// Run this command to upload data:
// node upload-xlsx-to-table.js <TableName> <FileName> <PartitionKey> [SortKey]
