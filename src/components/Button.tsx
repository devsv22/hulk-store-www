import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactElement | string;
}

const ButtonStyle = styled.button`
  padding: 10px;
  border-radius: 4px;
  border-style: none;
  outline-style: none;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px 0 #eee;
  cursor: pointer;
  font-family: arial;

  &:active {
    box-shadow: inset 0 0 10px 0 #eee;
  }
`;

const Button = ({ children, ...rest }: Props): React.ReactElement => {
  return <ButtonStyle {...rest}>{children}</ButtonStyle>;
};

export default Button;
