import "dotenv/config";
import JWT from "@fastify/jwt";
import fastify from "fastify";
import cors from "@fastify/cors";
import { memoriesRoutes } from "./routes/memories";
import { authRoutes } from "./routes/auth";

const app = fastify();
app.register(cors, {
  origin: true,
});
app.register(JWT, {
  secret: "spacetime",
});
app.register(memoriesRoutes);
app.register(authRoutes);

app
  .listen({
    port: 3333,
    host:'0.0.0.0'
  })
  .then(() => {
    console.log("😎 Server is running on port 3333");
  });
