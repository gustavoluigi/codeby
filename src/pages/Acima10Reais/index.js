import Button from '../../components/Button';
import ProductList from '../../components/ProductList';
import TotalCard from '../../components/TotalCard';
import data from '../../utils/acima-10-reais.json';

function Acima10Reais() {
  const total = data.items.reduce((prevVal, elem) => prevVal + elem.sellingPrice, 0);
  return (
    <>
      <ProductList list={data.items} />
      <TotalCard total={data.value ? data.value : total} />
      <Button />
    </>
  );
}

export default Acima10Reais;
