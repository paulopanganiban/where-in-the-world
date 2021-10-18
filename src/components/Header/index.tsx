import React from "react";
import Link from "next/link";
import DarkModeButton from "../darkMode/darkModeButton";
import DarkModeIcon from "../darkMode/darkModeIcon";
import * as S from "./header.styles";
interface Props {
  title: string;
  theme: string | boolean | (() => void);
  toggleTheme: string | boolean | (() => void);
  themeMode: { body: string; text: string; background: string };
}
const Header = ({ title, theme, toggleTheme, themeMode }: Props) => {
  return (
    <S.HeaderContainer>
      <Link href="/" passHref>
        <S.StyledH1>{title}</S.StyledH1>
      </Link>
      <S.DarkModeContainer>
        <DarkModeIcon theme={theme} width={12} height={12} />
        <DarkModeButton
          buttonLabel={"Dark Mode"}
          themeMode={themeMode}
          toggleTheme={toggleTheme}
        />
      </S.DarkModeContainer>
    </S.HeaderContainer>
  );
};

export default Header;
