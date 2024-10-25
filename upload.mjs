import fs from "node:fs";
import tus from "tus-js-client";

const path = import.meta.filename;
const file = fs.createReadStream(path);

const options = {
  endpoint: "http://sfhs.localhost:3001/uploads",
  metadata: {
    filename: "upload.mjs",
    filetype: "text/plain",
  },
  onError(error) {
    console.error("An error occurred:");
    console.error(error);
    process.exitCode = 1;
  },
  onProgress(bytesUploaded, bytesTotal) {
    const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
    console.log(bytesUploaded, bytesTotal, `${percentage}%`);
  },
  onSuccess() {
    console.log("Upload finished:", upload.url);
  },
};

const upload = new tus.Upload(file, options);
upload.start();
