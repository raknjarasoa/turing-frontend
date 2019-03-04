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

export const CREATE_PRODUCT_QUERY = gql`
  mutation CREATE_PRODUCT_QUERY(
    $name: String!
    $description: String!
    $display: Int!
    $price: Float!
    $image: String
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        display: $display
        price: $price
        image: $image
      }
    ) {
      id
    }
  }
`;
