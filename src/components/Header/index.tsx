import React from "react";
import Link from "next/link";
import DarkModeButton from "../darkMode/darkModeButton";
import DarkModeIcon from "../darkMode/darkModeIcon";
import { HeaderContainer, StyledH1, DarkModeContainer } from "./header.styles";
interface Props {
  title: string;
  theme: string | boolean | (() => void);
  toggleTheme: string | boolean | (() => void);
  themeMode: { body: string; text: string; background: string };
}
const Header = ({ title, theme, toggleTheme, themeMode }: Props) => {
  return (
    <HeaderContainer>
      <Link href="/" passHref>
        <StyledH1>{title}</StyledH1>
      </Link>
      <DarkModeContainer>
        <DarkModeIcon theme={theme} width={12} height={12} />
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
