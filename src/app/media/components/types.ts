export type MediaType =
  | "video"
  | "pdf"
  | "press"
  | "image"
  | "comic"
  | "podcast"
  | "presentation";

export interface MediaItem {
  id: string;
  title: string;
  type: MediaType;
  src: string;
  thumbnail: string;
  alt: string;
  description?: string;
  year?: number;
  tags?: string[];
  external?: boolean;
  featured?: boolean;
}
