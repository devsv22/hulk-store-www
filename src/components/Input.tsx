import styled from 'styled-components';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const StyledInput = styled.input`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 50%;
  outline-color: gray;
`;

const Input = ({ ...rest }: Props) => {
  return <StyledInput {...rest} />;
};

export default Input;
