import styled from 'styled-components';

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: {
    id: string;
    name: string;
  }[];
}

const SelectContainer = styled.select`
  width: 50%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  outline-color: gray;
`;

const Select = ({ options, ...rest }: Props) => {
  return (
    <SelectContainer {...rest}>
      {options.map(({ id, name }) => (
        <option key={`${name}-${id}`} value={id}>
          {name}
        </option>
      ))}
    </SelectContainer>
  );
};

export default Select;
