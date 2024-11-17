import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export const getPosts = async () => {
  const res = await client.getEntries({
    content_type: "blogPost",
  });
  return res.items;
};

export default client;
