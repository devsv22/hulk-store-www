import styled from 'styled-components';
import Button from 'components/Button';

interface Props {
  onAddProduct?: () => void;
  onAddSupplier?: () => void;
  onCreateKardexRegistry?: () => void;
}

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 15px;
  border-bottom: 1px solid #ddd;
  background-color: #f9f9f9;
  box-shadow: 0 0 5px 0 #ddd;

  button {
    margin-left: 10px;
  }
`;

const Header = ({
  onAddProduct,
  onAddSupplier,
  onCreateKardexRegistry,
}: Props) => {
  return (
    <HeaderStyle>
      <Button onClick={onAddProduct}>Agregar Producto</Button>
      <Button onClick={onAddSupplier}>Agregar Proveedor</Button>
      <Button onClick={onCreateKardexRegistry}>Crear registro Kardex</Button>
    </HeaderStyle>
  );
};

export default Header;
