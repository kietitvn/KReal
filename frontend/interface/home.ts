import { IImage } from "./common";
export interface IQueryStory {
  stories: [
    {
      id: string;
      title: string;
      title2: string;
      content: string;
      image: IImage;
    }
  ];
}

export interface IHomeMenuItem {
  id: string;
  name: string;
  image: IImage;
}

export interface IQueryHomeMenu {
  menuCategories: [IHomeMenuItem];
  menuCategoriesConnection: {
    aggregate: {
      count: number;
    };
  };
}

export interface IQueryComment {
  comments: [
    {
      id: string;
      name: string;
      image: IImage;
      content: string;
    }
  ];
  commentsConnection: {
    aggregate: {
      count: number;
    };
  };
}

export interface IQueryConfig {
  config: {
    phone: string;
    address: string;
    email: string;
    opening_hours: string;
    banner_gallery: {
      url: string;
    };
    banner_contact: {
      url: string;
    };
    banner_activity: {
      url: string;
    };
    banner_reservation: {
      url: string;
    };
    seo: {
      title: string;
      description: string;
      meta: {
        name: string;
        content: string;
      };
    };
  };
}

export interface ISeoDefault {
  title: string;
  description: string;
  meta: [
    {
      name: string;
      content: string;
    }
  ];
}

export interface IQuerySeoDefault {
  config: {
    seo: ISeoDefault;
  };
}

export interface IQueryBanner {
  config: {
    banner: [IImage];
  };
}
