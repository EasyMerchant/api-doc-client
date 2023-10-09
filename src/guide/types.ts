export type Guide = {
  id: string;
  title?: string;
  description?: string[];
  content?: Content[];
  defaultOpen?: boolean;
};

type Content = {
  id: string;
  title: string;
  description?: ContentDescription[];
};

type ContentDescription = {
  paragraph: string;
  image?: {
    src: string;
    alt: string;
    objectFit: 'contain' | 'cover' | 'fill';
    width: number;
    height: number;
  };
  list?: { ordered?: string[]; unOrdered?: string[] };
};
