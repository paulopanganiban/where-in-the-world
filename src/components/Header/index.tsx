import React from 'react'
import Link from 'next/link'
import DarkModeButton from '../darkMode/darkModeButton'
import DarkModeIcon from '../darkMode/darkModeIcon'
import * as S from './header.styles'
import { DefaultTheme } from 'styled-components'

interface Props {
  title: string
  theme: string | boolean | (() => void)
  toggleTheme: () => void
  themeMode: DefaultTheme
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
          buttonLabel={'Dark Mode'}
          toggleTheme={toggleTheme}
          theme={themeMode}
        />
      </S.DarkModeContainer>
    </S.HeaderContainer>
  )
}

export default Header
