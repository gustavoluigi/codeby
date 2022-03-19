import PropTypes from 'prop-types';
import { Container } from './styles';
import ProductCard from '../ProductCard';

function ProductList({ list }) {
  return (
    <Container>
      {list && list.map((item) => (
        <ProductCard key={item.uniqueId} item={item} />
      ))}
    </Container>
  );
}

export default ProductList;

ProductList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
};
