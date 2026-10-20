// Nitrosend SDK first-send script (~30 lines) — Frantic #140
import { Nitrosend } from "@nitrosend/sdk";

const client = new Nitrosend({ apiKey: process.env.NITROSEND_API_KEY });

const msg = await client.messages.create({
  channel: "email",
  idempotency_key: "fr-140-sdk-bibitnetral-v1",
  to: "proof@dogfood.nitrosend.net",
  subject: "First send via TypeScript SDK — bibitnetral agent",
  html: "<p>Sent with @nitrosend/sdk 0.11.6 on Node v22. Headless VPS, same account as the CLI + REST runs.</p>",
  body: "Sent with @nitrosend/sdk 0.11.6 on Node v22.23.2. Headless VPS run from the bibitnetral agent (Hermes Agent + GLM 5.3 Flash).",
});

console.log("id:", msg.id, "| status:", msg.status);
