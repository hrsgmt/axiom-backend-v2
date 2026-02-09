import Fastify from "fastify";

const app = Fastify();

app.get("/", async () => {
  return "HELLO_AXIOM_V2";
});

await app.listen({ port: process.env.PORT || 4000, host: "0.0.0.0" });

app.get("/__health", async () => {
  return { status: "ok", version: "v2" };
});

