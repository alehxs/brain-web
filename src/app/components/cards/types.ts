export type ContentCardProps = {
  href: string;
  title: string;
  imageSrc?: string;
  imageAlt?: string;
  summary?: string;
  meta?: string;
  external?: boolean;
};

export type PublicationCardWideProps = {
  href: string;
  title: string;
  authors?: string;
  venue?: string;
  year?: string | number;
  pdf?: string;
  tags?: string[];
  external?: boolean;
};