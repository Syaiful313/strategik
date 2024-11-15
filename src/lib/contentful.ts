import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_EVIRONMENT_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

// client
//   .getEntries({ content_type: "blogPost" })
//   .then((response) => {
//     console.log(response.items);
//   })
//   .catch(console.error);

// [
//   {
//     sys: { id: "12345" },
//     fields: {
//       title: "Belajar Contentful",
//       body: "Ini adalah contoh artikel untuk belajar Contentful.",
//       image: {
//         fields: {
//           file: {
//             url: "//images.ctfassets.net/space-id/filename.jpg",
//           },
//         },
//       },
//     },
//   },
// ];
