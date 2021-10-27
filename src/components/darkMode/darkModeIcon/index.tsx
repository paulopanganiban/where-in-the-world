import React from 'react'
import Image from 'next/image'
import lightMoon from '../../../../public/crescent-moon-light.svg'
import darkMoon from '../../../../public/crescent-moon-dark.svg'

interface Props {
  theme: string | boolean | (() => void)
  width: number
  height: number
}

const DarkModeIcon = ({ theme, width, height }: Props) => {
  return (
    <div>
      <Image
        alt="Icon image"
        src={theme === 'light' ? lightMoon : darkMoon}
        width={width}
        height={height}
      />
    </div>
  )
}

export default DarkModeIcon
