import React, { Component } from 'react';
import { Query } from 'react-apollo';

import styled from 'styled-components';
import Product from '../src/components/Product';
import { ALL_PRODUCTS_QUERY } from '../src/queries';

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
                {data.products.map((product) => (
                  <Product key={product.id} product={product} />
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
