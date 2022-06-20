import Header from 'components/Header';
import AddKardexRegistry from 'components/Kardex/AddKardexRegistry';
import AddNewProduct from 'components/Product/AddNewProduct';
import AddNewSupplier from 'components/Supplier/AddNewSupplier';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  margin: 10px 20vw;
`;

const App: React.FC = () => {
  const navigation = useNavigate();

  const onAddProduct = () => navigation('/products');
  const onAddSupplier = () => navigation('/suppliers');
  const onKardexRegistry = () => navigation('/kardex');

  return (
    <>
      <Header
        onAddProduct={onAddProduct}
        onAddSupplier={onAddSupplier}
        onCreateKardexRegistry={onKardexRegistry}
      />
      <Container>
        <Routes>
          <Route path="/products" element={<AddNewProduct />} />
          <Route path="/suppliers" element={<AddNewSupplier />} />
          <Route path="/kardex" element={<AddKardexRegistry />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
