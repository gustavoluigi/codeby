import PropTypes from 'prop-types';
import { TotalBox } from './styles';

function TotalCard({ total }) {
  return (
    <TotalBox>
      <p>Total</p>
      <p>
        {`R$ ${total.toString().slice(0, -2)},${total
          .toString()
          .slice(-2)}`}

      </p>
      {total >= 1000 && (
      <div className="alert">
        Parabéns, sua compra tem frete grátis!
      </div>
      )}
    </TotalBox>
  );
}

export default TotalCard;

TotalCard.propTypes = {
  total: PropTypes.number.isRequired,
};
