import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const ALL_PRODUCTS_QUERY = gql`
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

const Center = styled.div`
  text-align: center;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
`;

class Products extends Component {
  render() {
    return (
      <div>
        <Query query={ALL_PRODUCTS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading ...</p>;
            if (error) return <p>{error.message}</p>;
            return (
              <ProductList>
                {data.products.map((p) => (
                  <>
                    <p key={p.id}>{p.description}</p>
                    <img src={p.image} alt={p.name} />
                  </>
                ))}
              </ProductList>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Products;
