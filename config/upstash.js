import { Client } from "@upstash/qstash";
import { QSTASH_TOKEN, QSTASH_URL } from "./env.js";

export const workflowClient = new Client({
  url: QSTASH_URL,
  token: QSTASH_TOKEN,
});
