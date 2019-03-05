import ProductDetail from '../src/components/ProductDetail';

const Detail = ({ query }) => (
  <div>
    <ProductDetail id={query.id} />
  </div>
);

export default Detail;
