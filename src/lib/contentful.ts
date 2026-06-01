import { createClient, FieldsType } from "contentful";
import { cache } from "react";
import type { Company } from "@/types/company";
import type { ServiceType } from "@/types/service";
import type { Document } from "@contentful/rich-text-types";

interface ResponseEntry {
  sys: { id: string };
  fields: FieldsType;
}

type ContentfulAssetField = {
  fields?: {
    file?: {
      url?: string;
    };
  };
};

const getRequiredEnv = (key: string): string => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
};

const getContentfulClient = () => {
  return createClient({
    space: getRequiredEnv("NEXT_PUBLIC_CONTENTFUL_SPACE_ID"),
    environment: getRequiredEnv("NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID"),
    accessToken: getRequiredEnv("NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN"),
  });
};

const getStringField = (fields: FieldsType, key: string): string => {
  const value = fields[key];
  return typeof value === "string" ? value : "";
};

const getDocumentField = (fields: FieldsType, key: string): Document => {
  return fields[key] as Document;
};

const getAssetUrl = (asset: unknown): string => {
  const url = (asset as ContentfulAssetField | undefined)?.fields?.file?.url;

  if (!url) {
    return "";
  }

  return url.startsWith("//") ? `https:${url}` : url;
};

const mapCompany = (company: ResponseEntry): Company => {
  return {
    entryId: company.sys.id,
    title: getStringField(company.fields, "title"),
    slug: getStringField(company.fields, "slug"),
    description: getStringField(company.fields, "description"),
    thumbnail: getAssetUrl(company.fields.thumbnail),
    content: getDocumentField(company.fields, "content"),
  };
};

const mapService = (service: ResponseEntry): ServiceType => {
  return {
    entryId: service.sys.id,
    title: getStringField(service.fields, "title"),
    slug: getStringField(service.fields, "slug"),
    desciption: getStringField(service.fields, "desciption"),
    thumbnail: getAssetUrl(service.fields.thumbnail),
    content: getDocumentField(service.fields, "content"),
    thumbail2: getAssetUrl(service.fields.thumbail2),
    content2: getDocumentField(service.fields, "content2"),
  };
};

export const getEntriesCompany = async (): Promise<Company[]> => {
  try {
    const res = await getContentfulClient().getEntries({
      content_type: "companyProfile",
    });

    return res.items.map((company) => mapCompany(company as ResponseEntry));
  } catch (error) {
    console.error("Error fetching entries:", error);
    return [];
  }
};

export const getEntryCompany = cache(
  async (slug: string): Promise<Company | null> => {
    try {
      const res = await getContentfulClient().getEntries({
        content_type: "companyProfile",
        "fields.slug": slug,
        limit: 1,
      });

      const [company] = res.items;
      return company ? mapCompany(company as ResponseEntry) : null;
    } catch (error) {
      console.error("Error fetching company entry:", error);
      return null;
    }
  },
);

export const getEntriesService = async (): Promise<ServiceType[]> => {
  try {
    const res = await getContentfulClient().getEntries({
      content_type: "services",
    });

    return res.items.map((service) => mapService(service as ResponseEntry));
  } catch (error) {
    console.error("Error fetching entries:", error);
    return [];
  }
};

export const getEntryService = cache(
  async (slug: string): Promise<ServiceType | null> => {
    try {
      const res = await getContentfulClient().getEntries({
        content_type: "services",
        "fields.slug": slug,
        limit: 1,
      });

      const [service] = res.items;
      return service ? mapService(service as ResponseEntry) : null;
    } catch (error) {
      console.error("Error fetching service entry:", error);
      return null;
    }
  },
);
