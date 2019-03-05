import gql from 'graphql-tag';

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    products {
      id
      name
      description
      display
      price
      image
    }
  }
`;

export const GET_PRODUCT_QUERY = gql`
  query GET_PRODUCT_QUERY($id: ID!) {
    product(where: { id: $id }) {
      id
      name
      description
      display
      price
    }
  }
`;

export const GET_PRODUCT_DETAIL_QUERY = gql`
  query GET_PRODUCT_DETAIL_QUERY($id: ID!) {
    product(where: { id: $id }) {
      id
      name
      description
      display
      price
      image
    }
  }
`;
