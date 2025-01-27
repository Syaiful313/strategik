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

export const getEntriesCompany = async () => {
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

export const getEntryCompany = cache(async (slug: string) => {
  try {
    const entries = await getEntriesCompany();
    const response = entries?.filter((company) => company.slug === slug);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const getEntriesService = async () => {
  try {
    const res = await client.getEntries({
      content_type: "services",
    });

    const services = res.items.map((service: ResponseEntry) => {
      return {
        entryId: service.sys.id,
        title: service.fields.title,
        slug: service.fields.slug,
        desciption: service.fields.desciption,
        thumbnail: "https:" + service.fields.thumbnail.fields.file.url,
        content: service.fields.content,
        thumbail2: "https:" + service.fields.thumbail2.fields.file.url,
        content2: service.fields.content2,
      };
    });

    return services;
  } catch (error) {
    console.error("Error fetching entries:", error);
  }
};

export const getEntryService = cache(async (slug: string) => {
  try {
    const entries = await getEntriesService();
    const response = entries?.filter((service) => service.slug === slug);
    return response;
  } catch (error) {
    console.log(error);
  }
});