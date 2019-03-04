import Router from 'next/router';
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import { CREATE_PRODUCT_QUERY } from '../queries';
import { Form } from '../styles';
import { uploadImage } from '../utils';
import DisplayError from './ErrorMessage';

export default class CreateProduct extends Component {
  state = {
    name: 'test',
    description: 'ddddddddd dddddddddd',
    display: 10,
    price: 10,
    image: '',
    files: null
  };

  handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({
      [name]: val
    });
  };

  handleSubmit = async (createProduct) => {
    const res = await uploadImage(this.state.files);
    const file = await res.json();

    this.setState({
      image: file.secure_url
    });

    const resp = await createProduct();
    console.log(resp);

    Router.push({
      pathname: '/product',
      query: {
        id: resp.data.createProduct.id
      }
    });
  };

  handleFileChange = (e) => {
    this.setState({
      files: e.target.files
    });
  };

  render() {
    return (
      <Mutation mutation={CREATE_PRODUCT_QUERY} variables={this.state}>
        {(createProduct, { loading, error, called, data }) => {
          return (
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                this.handleSubmit(createProduct);
              }}>
              <DisplayError error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor='image'>
                  Image
                  <input
                    type='file'
                    name='image'
                    id='image'
                    placeholder='Upload image'
                    onChange={this.handleFileChange}
                  />
                  {this.state.image && (
                    <img
                      src={this.state.image}
                      alt='Preview upload'
                      width='200px'
                    />
                  )}
                </label>

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
