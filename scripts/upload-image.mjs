// Upload a local image to Strapi's media library and print its public URL.
// Usage: node scripts/upload-image.mjs <path/to/image>
// Pipe the URL straight into update-page.mjs, e.g. into instructor.imageUrl.

import { uploadImage } from "./strapi-client.mjs";

const [, , localPath] = process.argv;
if (!localPath) {
  console.error("Usage: node scripts/upload-image.mjs <path/to/image>");
  process.exit(2);
}

const url = await uploadImage(localPath);
console.log(url);
