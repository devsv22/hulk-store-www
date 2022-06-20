import { useState } from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import styled from 'styled-components';
import { axiosApi } from 'utils/axios';

const SupplierContainerForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SupplierContainerActions = styled.div`
  margin-top: 20px;
  text-align: left;
`;

const AddNewSupplier = () => {
  const [supplierName, setSupplierName] = useState('');

  const onSupplierSubmit = async () => {
    const name = supplierName.trim();

    if (name && name.length > 0) {
      const response = await axiosApi.post<null>('/suppliers', { name });
      if (response.status === 201) {
        alert('Supplier added successfully');
        setSupplierName('');
      }
    }
  };

  return (
    <>
      <SupplierContainerForm>
        <Input
          type="text"
          placeholder="Name"
          value={supplierName}
          onChange={(ev) => setSupplierName(ev.target.value)}
        />
      </SupplierContainerForm>
      <SupplierContainerActions>
        <Button onClick={onSupplierSubmit}>Guardar</Button>
      </SupplierContainerActions>
    </>
  );
};

export default AddNewSupplier;
