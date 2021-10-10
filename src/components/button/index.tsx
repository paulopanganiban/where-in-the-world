import styled from "styled-components";

interface Props {}
interface StyledButtonProps {
  width?: string;
  height?: string;
}
const Button = ({ label, onClick, width, height }: any) => {
  return (
    <StyledButton onClick={onClick} width={width} height={height}>
      {label}
    </StyledButton>
  );
};

export default Button;
const StyledButton = styled.button<StyledButtonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({theme}) => theme.background};
  color: ${({theme}) => theme.text};
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
