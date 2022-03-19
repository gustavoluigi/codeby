/* eslint-disable no-param-reassign */
import PropTypes from 'prop-types';
import { BoxImg, BoxText, Container } from './styles';

function ProductCard({ item }) {
  return (
    <Container>
      <BoxImg>
        <img src={item.imageUrl} alt="" />
      </BoxImg>
      <BoxText>
        <p className="title">{item.name}</p>
        <p className="oldPrice">{`R$ ${item.price.toString().slice(0, -2)},${item.price.toString().slice(-2)}`}</p>
        <p className="price">
          {`R$ ${item.sellingPrice.toString().slice(0, -2)},${item.sellingPrice.toString().slice(-2)}`}
        </p>
      </BoxText>
    </Container>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
