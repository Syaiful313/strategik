import { createClient, FieldsType } from "contentful";
import { cache } from "react";

interface ResponseEntry {
  sys: { id: string };
  fields: FieldsType;
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export const getEntries = async () => {
  try {
    const res = await client.getEntries({
      content_type: "companyProfile",
    });

    const companies = res.items.map((company: ResponseEntry) => {
      return {
        entryId: company.sys.id,
        title: company.fields.title,
        slug: company.fields.slug,
        description: company.fields.description,
        thumbnail: "https:" + company.fields.thumbnail.fields.file.url,
        content: company.fields.content,
      };
    });

    return companies;
  } catch (error) {
    console.error("Error fetching entries:", error);
  }
};

export const getEntry = cache(async (slug: string) => {
  try {
    const entries = await getEntries();
    const response = entries?.filter((company) => company.slug === slug);
    return response;
  } catch (error) {
    console.log(error)
  }
})