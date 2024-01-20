interface Metadata {
  date: Date;
  imageUrl: string;
  title: string;
  description: string;
  keywords: string[];
}

export type BlogMetadata = Partial<Metadata>;

export interface Blog extends BlogMetadata {
  content: string;
}
export interface GreyMatterBlog {
  slug: string;
  content: string;
  data: BlogMetadata;
}
