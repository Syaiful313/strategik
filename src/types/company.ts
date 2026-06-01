import type { Document } from "@contentful/rich-text-types";

export interface Company {
  entryId: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  content: Document;
}
