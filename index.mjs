import audit from "express-requests-logger";
import { Server } from "@tus/server";
import { FileStore } from "@tus/file-store";
import express from "express";

const host = "127.0.0.1";
const port = 3000;

const app = express();
const server = new Server({
  path: "/uploads",
  datastore: new FileStore({ directory: "/tmp" }),

  //respect X-Forwarded- headers
  respectForwardedHeaders: true,
});

app.use("/uploads", 
   audit(),
   server.handle.bind(server),
);

app.listen(port, host);
