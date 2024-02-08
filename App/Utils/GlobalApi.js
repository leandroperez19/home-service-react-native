import { gql, request } from "graphql-request";

const MASTER_URL =
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clsarnen62bhc01w3eqdtzy4f/master";

const getSlider = async () => {
  const query = gql`
    query GetSliders {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `;
  return await request(MASTER_URL, query);
};

const getCategories = async () => {
  const query = gql`
    query GetCategory {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `;
  return await request(MASTER_URL, query);
};

export { getSlider, getCategories };
