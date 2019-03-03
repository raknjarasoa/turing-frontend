import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { ItemStyles, PriceTag, Title } from '../components/styles';
import { formatMoney } from '../lib';

export default class Product extends PureComponent {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        {item.image && <img src={item.image} alt={item.name} />}
        <Title>
          <Link
            href={{
              pathname: '/item',
              query: {
                id: item.id
              }
            }}>
            <a>{item.name}</a>
          </Link>
        </Title>

        <PriceTag>{formatMoney(item.price)}</PriceTag>

        <p>{item.description}</p>

        <div className='buttonList'>
          <Link
            href={{
              pathname: 'update',
              query: {
                id: item.id
              }
            }}>
            <a>Edit ♐️</a>
          </Link>
          <button>Add to Cart</button>
          <button>Delete</button>
        </div>
      </ItemStyles>
    );
  }
}
