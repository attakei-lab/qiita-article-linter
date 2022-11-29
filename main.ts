import matter from "npm:gray-matter@^4.0.3";
import { cli } from "npm:textlint@^12.2.3";
import "./rules.ts";

// Parse URL
const articleUrl = Deno.args[0];

// Fetch article
const resp = await fetch(`${articleUrl}.md`);
const body = await resp.text();

// Remove frontmatter
let data = matter(body);

// Lint content
const result = await cli.execute(
  {
    stdin: true,
    stdinFilename: "article.mdx",
  },
  data.content,
);
console.log(result);
