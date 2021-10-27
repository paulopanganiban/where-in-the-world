import React from 'react'
import { StyledButton } from './button.styles'

type Props = {
  label: string
  onClick: () => void
  height: string
  width: string
  margin?: string
}

const Button = ({ label, onClick, width, height, margin }: Props) => {
  return (
    <StyledButton
      onClick={onClick}
      width={width}
      height={height}
      margin={margin}
    >
      {label}
    </StyledButton>
  )
}

export default Button
