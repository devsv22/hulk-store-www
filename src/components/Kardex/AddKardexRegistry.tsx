import { useEffect, useState } from 'react';
import { Product } from 'interfaces/product';
import { Supplier } from 'interfaces/supplier';
import { getProductList, getSupplierList } from 'utils/api-getters';
import styled from 'styled-components';
import Button from 'components/Button';
import Input from 'components/Input';
import Select from 'components/Select';

const KardexContainerForm = styled.div`
  input {
    margin-bottom: 10px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  select {
    width: calc(50% - 5px);
  }
`;

const KardexContainerActions = styled.div`
  margin-top: 10px;
`;

const AddKardexRegistry = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  const onKardexRegistrySubmit = () => {};

  useEffect(() => {
    const getProducts = async () => {
      const current = await getProductList();
      setProducts(current);
    };

    const getSuppliers = async () => {
      const current = await getSupplierList();
      setSuppliers(current);
    };

    getProducts();
    getSuppliers();
  }, []);

  return (
    <>
      <KardexContainerForm>
        <FormGroup>
          <Select options={products} />
          <Select options={suppliers} />
        </FormGroup>
        <Input
          type="number"
          max="10000000"
          min="0"
          placeholder="Cantidad maxima"
        />
        <Input
          type="number"
          max="10000000"
          min="0"
          placeholder="Cantidad minima"
        />
        <Input type="text" placeholder="Referencia" />
      </KardexContainerForm>
      <KardexContainerActions>
        <Button onClick={onKardexRegistrySubmit}>Guardar</Button>
      </KardexContainerActions>
    </>
  );
};

export default AddKardexRegistry;
