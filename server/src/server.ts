import "dotenv/config";
import JWT from "@fastify/jwt";
import multipart from "@fastify/multipart";
import fastify from "fastify";
import cors from "@fastify/cors";
import { memoriesRoutes } from "./routes/memories";
import { authRoutes } from "./routes/auth";
import { uploadRoutes } from "./routes/upload";
import { resolve } from "node:path";

const app = fastify();

app.register(multipart);

app.register(require("fastify-static"), {
  root: resolve(__dirname, "../uploads"),
  prefix: "/uploads",
});

app.register(cors, {
  origin: true,
});

app.register(JWT, {
  secret: "spacetime",
});

app.register(memoriesRoutes);

app.register(authRoutes);

app.register(uploadRoutes);

app
  .listen({
    port: 3333,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("😎 Server is running on port 3333");
  });
