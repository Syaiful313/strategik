import { createClient } from "contentful";


const Clients = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_EVIRONMENT_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});


