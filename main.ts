const API_URL_BASE = "https://qiita.com/api/v2/items";

const articleUrl = Deno.args[0];
const articleId = articleUrl.split("/").pop();

const resp = await fetch(
  `${API_URL_BASE}/${articleId}`,
  {
    headers: {
      Authorization: `Bearer ${Deno.env.get("QIITA_API_TOKEN")}`
    },
  },
);
const data = await resp.json();
console.log(data.body);
