import React from 'react'
import { DefaultTheme } from 'styled-components'
import { Button } from '../darkModeButton.styles'

type Props = {
  theme: DefaultTheme
  toggleTheme: () => void
  buttonLabel: string
}

const DarkModeButton = ({ theme, toggleTheme, buttonLabel }: Props) => {
  return (
    <Button theme={theme} onClick={toggleTheme}>
      <p>{buttonLabel}</p>
    </Button>
  )
}

export default DarkModeButton
