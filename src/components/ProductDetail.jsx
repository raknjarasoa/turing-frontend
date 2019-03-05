import React, { Component } from 'react';
import { Query } from 'react-apollo';

import Head from 'next/head';
import { GET_PRODUCT_DETAIL_QUERY } from '../queries';
import DisplayError from './ErrorMessage';

class Product extends Component {
  render() {
    return (
      <Query
        query={GET_PRODUCT_DETAIL_QUERY}
        variables={{
          id: this.props.id
        }}>
        {({ data, loading, error }) => {
          if (error) return <DisplayError error={error} />;
          if (loading) return <p>Loading ...</p>;
          console.log(data);
          return (
            <div>
              <Head>
                <title>Detail {data.product.name}</title>
              </Head>
              DETAIL
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Product;
