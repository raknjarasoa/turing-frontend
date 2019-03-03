import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Product extends PureComponent {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    return <div>Test</div>;
  }
}
