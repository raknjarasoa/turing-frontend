import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Form } from '../styles';
import Router from 'next/router';

import DisplayError from './ErrorMessage';

const CREATE_PRODUCT_QUERY = gql`
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

export default class CreateProduct extends Component {
  state = {
    name: '',
    description: '',
    display: 0,
    price: 0,
    image: ''
  };

  handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({
      [name]: val
    });
  };

  render() {
    return (
      <Mutation mutation={CREATE_PRODUCT_QUERY} variables={this.state}>
        {(createProduct, { loading, error, called, data }) => {
          return (
            <Form
              onSubmit={async (e) => {
                e.preventDefault();
                const resp = await createProduct();
                console.log(resp);

                Router.push({
                  pathname: '/product',
                  query: {
                    id: resp.data.createProduct.id
                  }
                });
              }}>
              <DisplayError error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor='name'>
                  Title
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Name'
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </label>

                <label htmlFor='description'>
                  Title
                  <textarea
                    rows='3'
                    name='description'
                    id='description'
                    placeholder='Description'
                    required
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </label>

                <label htmlFor='display'>
                  Title
                  <input
                    type='number'
                    name='display'
                    id='display'
                    placeholder='Display'
                    required
                    value={this.state.display}
                    onChange={this.handleChange}
                  />
                </label>

                <label htmlFor='price'>
                  Title
                  <input
                    type='number'
                    name='price'
                    id='price'
                    placeholder='Name'
                    required
                    value={this.state.price}
                    onChange={this.handleChange}
                  />
                </label>

                <button type='submit'>Submit</button>
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}
