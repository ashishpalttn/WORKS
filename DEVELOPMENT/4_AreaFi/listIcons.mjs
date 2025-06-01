import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

// Replace these with your values
const REGION = "ap-south-1";
const BUCKET_NAME = "areafi";
const PREFIX = "images/categories-icon/";

const s3Client = new S3Client({ region: REGION });

async function listIcons() {
  const command = new ListObjectsV2Command({
    Bucket: BUCKET_NAME,
    Prefix: PREFIX,
  });

  try {
    const response = await s3Client.send(command);
    const files = response.Contents || [];

    if (files.length === 0) {
      console.log("No icons found.");
      return;
    }

    console.log("Public URLs:");
    files.forEach((file) => {
      const publicUrl = `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${file.Key}`;
      console.log(publicUrl);
    });
  } catch (err) {
    console.error("Error listing icons:", err);
  }
}

listIcons();
