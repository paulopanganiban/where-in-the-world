import React from "react";

import styled from "styled-components";
import Link from 'next/link'

import DarkModeButton from "../darkMode/darkModeButton";
import DarkModeIcon from "../darkMode/darkModeIcon";
interface Props {
  title: string;
  theme: string | boolean | (() => void);
  toggleTheme: string | boolean | (() => void);
  themeMode: { body: string; text: string; background: string };
}
const Header = ({ title, theme, toggleTheme, themeMode }: Props) => {
  return (
    <HeaderContainer>
      <Link href='/' passHref>
      <StyledH1>{title}</StyledH1>
      </Link>
      <DarkModeContainer>
        <DarkModeIcon theme={theme} width={12} height={12}/>
        <DarkModeButton
          buttonLabel={"Dark Mode"}
          themeMode={themeMode}
          toggleTheme={toggleTheme}
        />
      </DarkModeContainer>
    </HeaderContainer>
  );
};

export default Header;
const StyledH1 = styled.h1`
cursor: pointer;
margin-left: 100px;
@media all and (max-width: 375px) { 
  font-size: 1.5rem;
  margin-left: 15px;
}
`
const HeaderContainer = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 77px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  background-color: ${({theme}) => theme.background};
`;
const DarkModeContainer = styled.div`
display: flex;
align-items: center;
margin-right: 80px;
@media all and (max-width: 375px) { 
  margin-right: 10px;
}
`
