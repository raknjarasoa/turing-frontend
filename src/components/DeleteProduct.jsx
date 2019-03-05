import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import { ALL_PRODUCTS_QUERY, DELETE_PRODUCT_MUTATION } from '../queries';

export default class DeleteProduct extends Component {
  update = (cache, payload) => {
    // Update manually apollo cache
    const data = cache.readQuery({
      query: ALL_PRODUCTS_QUERY
    });

    data.products = data.products.filter(
      (p) => p.id !== payload.data.deleteProduct.id
    );
    cache.writeQuery({
      query: ALL_PRODUCTS_QUERY,
      data
    });
  };
  render() {
    return (
      <Mutation
        mutation={DELETE_PRODUCT_MUTATION}
        variables={{
          id: this.props.id
        }}
        update={this.update}>
        {(deleteProduct, { error, loading }) => {
          return (
            <button
              onClick={(e) => {
                if (confirm('Would you delete this product?')) {
                  deleteProduct();
                }
              }}>
              {this.props.children}
            </button>
          );
        }}
      </Mutation>
    );
  }
}
