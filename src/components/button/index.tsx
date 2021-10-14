import { StyledButton } from "./button.styles";

const Button = ({ label, onClick, width, height, margin }: any) => {
  return (
    <StyledButton
      onClick={onClick}
      width={width}
      height={height}
      margin={margin}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
