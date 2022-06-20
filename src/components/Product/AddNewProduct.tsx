import { useState } from 'react';
import Button from 'components/Button';
import Input from 'components/Input';
import styled from 'styled-components';
import { axiosApi } from 'utils/axios';

const ProductContainerForm = styled.div`
  input {
    margin-bottom: 10px;
  }
`;

const ProductContainerActions = styled.div`
  margin-top: 10px;
`;

const AddNewProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const onProductSubmit = async () => {
    if (name.length > 0 && description.length > 0 && price > 0) {
      const response = await axiosApi.post('/products', {
        name,
        description,
        price,
      });

      if (response.status === 201) {
        alert('Product added successfully');
        setName('');
        setDescription('');
        setPrice(0);
      }
    }
  };

  return (
    <>
      <ProductContainerForm>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        <Input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        <Input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(ev) => setPrice(+ev.target.value)}
        />
      </ProductContainerForm>
      <ProductContainerActions>
        <Button onClick={onProductSubmit}>Guardar</Button>
      </ProductContainerActions>
    </>
  );
};

export default AddNewProduct;
