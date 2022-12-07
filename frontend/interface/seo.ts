export interface ISeo {
  metaTitle: string;
  metaDescription: string;
  shareImage: {
    alt: string;
    media: {
      url: string;
    };
  };
  preventIndexing: Boolean;
  keywords: string;
}
