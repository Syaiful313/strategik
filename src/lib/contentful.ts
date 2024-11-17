import { createClient } from "contentful";


const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_EVIRONMENT_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});


export const getPosts = async () => {
  const res = await client.getEntries({
    content_type: 'blog-strategik', // pastikan menggunakan content type yang tepat
  });
  return res.items;
};

export default client;