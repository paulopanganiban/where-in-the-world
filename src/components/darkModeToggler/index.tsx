import React from "react";
import styled from "styled-components";
const DarkModeToggler = ({ theme, toggleTheme, Icon, buttonLabel }: any) => {
  return (
    <Button theme={theme} onClick={toggleTheme}>
      <Icon /> <p>{buttonLabel}</p>
    </Button>
  );
};
export default DarkModeToggler;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: Transparent;
  background-repeat: no-repeat;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  text-align: center;
  font-weight: bold;
`;
