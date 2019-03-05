import Router from 'next/router';
import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';

import { GET_PRODUCT_QUERY, UPDATE_PRODUCT_MUTATION } from '../queries';
import { Form } from '../styles';
import DisplayError from './ErrorMessage';

export default class UpdateProduct extends Component {
  state = {};

  handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({
      [name]: val
    });
  };

  handleSubmit = async (e, updateProduct) => {
    e.preventDefault();
    const resp = await updateProduct({
      variables: {
        id: this.props.id
      }
    });

    Router.push({
      pathname: '/product',
      query: {
        id: resp.data.updateProduct.id
      }
    });
  };

  render() {
    return (
      <Query query={GET_PRODUCT_QUERY} variables={{ id: this.props.id }}>
        {({ data, loading }) => {
          if (loading) return <p>Loading ...</p>;
          if (!data.product) return <p>No data for id {this.props.id}</p>;
          return (
            <Mutation mutation={UPDATE_PRODUCT_MUTATION} variables={this.state}>
              {(updateProduct, { loading, error, called }) => {
                return (
                  <Form onSubmit={(e) => this.handleSubmit(e, updateProduct)}>
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
                          defaultValue={data.product.name}
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
                          defaultValue={data.product.description}
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
                          defaultValue={data.product.display}
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
                          defaultValue={data.product.price}
                          onChange={this.handleChange}
                        />
                      </label>

                      <button type='submit'>Sav{loading ? 'ing' : 'e'}</button>
                    </fieldset>
                  </Form>
                );
              }}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}
