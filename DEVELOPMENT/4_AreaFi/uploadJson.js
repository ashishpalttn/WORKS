const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");

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

async function uploadToDynamoDB(tableName, fileName, partitionKey, sortKey = null) {
  const filePath = path.join(__dirname, "data", fileName);
  const rawData = fs.readFileSync(filePath, "utf8");
  const items = JSON.parse(rawData).map((item) => ({
    ...item,
    [partitionKey]: String(item[partitionKey]), // Convert partition key to string
  }));

  // Validate that each item contains the required keys
  for (const item of items) {
    if (!item[partitionKey]) {
      throw new Error(`❌ Missing partition key "${partitionKey}" in item: ${JSON.stringify(item)}`);
    }
    if (sortKey && !item[sortKey]) {
      throw new Error(`❌ Missing sort key "${sortKey}" in item: ${JSON.stringify(item)}`);
    }

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

// Pass args: node upload.js <TableName> <FileName> <PartitionKey> [SortKey]
const [,, tableName, fileName, partitionKey, sortKey] = process.argv;

if (!tableName || !fileName || !partitionKey) {
  console.error("❗ Usage: node upload.js <TableName> <FileName> <PartitionKey> [SortKey]");
  process.exit(1);
}

uploadToDynamoDB(tableName, fileName, partitionKey, sortKey);

// Run this command to upload data:
// Usage: node uploadJson.js <TableName> <FileName> <PartitionKey> [SortKey]