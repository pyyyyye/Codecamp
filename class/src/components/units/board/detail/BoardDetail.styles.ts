import styled from '@emotion/styled';

export const MyInput = styled.input`
  border: 1px solid black;
`;

interface IProps {
  active: boolean;
}
export const MyButton = styled.button`
  color: ${(props: IProps) => (props.active ? 'red' : 'blue')};
`;
