import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { ItemStyles, PriceTag, Title } from '../styles';
import { formatMoney } from '../utils';
import DeleteProduct from './DeleteProduct';

class Product extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  };

  render() {
    const { product } = this.props;
    return (
      <ItemStyles>
        {product.image && <img src={product.image} alt={product.name} />}
        <Title>
          <Link
            href={{
              pathname: '/product',
              query: {
                id: product.id
              }
            }}>
            <a>{product.name}</a>
          </Link>
        </Title>

        <PriceTag>{formatMoney(product.price)}</PriceTag>

        <p>{product.description}</p>

        <div className='buttonList'>
          <Link
            href={{
              pathname: 'update',
              query: {
                id: product.id
              }
            }}>
            <a>Edit ♐️</a>
          </Link>
          <button>Add to Cart</button>
          <DeleteProduct id={product.id}>Delete product</DeleteProduct>
        </div>
      </ItemStyles>
    );
  }
}

export default Product;
