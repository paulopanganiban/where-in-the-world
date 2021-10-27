import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from '../Header'
import { darkTheme, lightTheme } from '../../styles/themes'
import { useDarkMode } from '../../utilities/hooks/darkMode'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../styles/global.styles'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const [theme, themeToggler, mountedComponent] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  if (!mountedComponent) return <div />

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Head>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Header
        title="Where in the world"
        theme={theme}
        toggleTheme={themeToggler}
        themeMode={themeMode}
      />
      <main>{children}</main>
    </ThemeProvider>
  )
}

export default Layout
