import type { Document } from "@contentful/rich-text-types";

export interface ServiceType {
  entryId: string;
  title: string;
  slug: string;
  desciption: string;
  thumbnail: string;
  content: Document;
  thumbail2: string;
  content2: Document;
}
