import { configSync } from "https://deno.land/std/dotenv/mod.ts";
import { cli } from "npm:textlint@^12.2.3";
import "./rules.ts";

const cfg = configSync();
Deno.env.set("QIITA_API_TOKEN", cfg["QIITA_API_TOKEN"]);

// Parse URL
const articleUrl = Deno.args[0];
const articleId = articleUrl.split("/").pop();

// Fetch article
const API_URL_BASE = "https://qiita.com/api/v2/items";
const resp = await fetch(
  `${API_URL_BASE}/${articleId}`,
  {
    headers: {
      Authorization: `Bearer ${Deno.env.get("QIITA_API_TOKEN")}`
    },
  },
);
const data = await resp.json();

// Lint content
const result = await cli.execute(
  {
    stdin: true,
    stdinFilename: "article.md",
  },
  data.body,
);
console.log(result);
