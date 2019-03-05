import gql from 'graphql-tag';

export const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
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

export const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $display: Int
    $price: Float
  ) {
    updateProduct(
      data: {
        name: $name
        description: $description
        display: $display
        price: $price
      }
      where: { id: $id }
    ) {
      id
    }
  }
`;

export const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(where: { id: $id }) {
      id
    }
  }
`;
