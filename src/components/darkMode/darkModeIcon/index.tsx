import React from 'react'
import Image from 'next/image'

interface Props {
  theme: string | boolean | (() => void)
  width: number
  height: number
}

const DarkModeIcon = ({ theme, width, height }: Props) => {
  return (
    <div>
      {theme === 'light' ? (
        <Image
          alt={theme}
          src="/crescent-moon-light.svg"
          width={width}
          height={height}
        />
      ) : (
        <Image
          src="/crescent-moon-dark.svg"
          alt={'dark'}
          width={width}
          height={height}
        />
      )}
    </div>
  )
}

export default DarkModeIcon
