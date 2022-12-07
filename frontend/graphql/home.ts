import gql from "graphql-tag";

export const queryStory = gql`
  {
    stories(sort: "id") {
      id
      title
      title2
      content
      image {
        url
        name
        alternativeText
        caption
      }
    }
  }
`;

export const queryHomeMenu = gql`
  query MenuCategories($start: Int, $limit: Int) {
    menuCategories(start: $start, limit: $limit, sort: "id") {
      id
      name
      image {
        url
        name
        alternativeText
        caption
      }
    }
    menuCategoriesConnection {
      aggregate {
        count
      }
    }
  }
`;

export const queryComment = gql`
  query Comments($start: Int, $limit: Int) {
    comments(start: $start, limit: $limit, sort: "id") {
      id
      name
      image {
        url
        name
        alternativeText
        caption
      }
      content
    }
    commentsConnection {
      aggregate {
        count
      }
    }
  }
`;

export const queryConfig = gql`
  query config {
    phone
    address
    email
    opening_hours
    banner_gallery {
      url
    }
    banner_contact {
      url
    }
    banner_activity {
      url
    }
    banner_reservation {
      url
    }
    seo {
      title
      description
      meta {
        name
        content
      }
    }
  }
`;

export const querySeoDefault = gql`
 query Config {
    config {
      seo {
        title
        description
        meta {
          name
          content
        }
      }
    }
  }
`;

export const queryBanner = gql`
  {
    config {
      banner {
        url
        name
        alternativeText
        caption
      }
    }
  }
`;
