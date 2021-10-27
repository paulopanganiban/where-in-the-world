import React from 'react'
import { Span } from '../../styles/country/[id].styles'

type Props = {
  name: string
  data: string | number | string[]
  margin: string
}

export const ListItem = ({ name, data, margin }: Props) => {
  return (
    <Span margin={margin}>
      <h4>{name}:{"\u00A0"}</h4>
      <p>{data}</p>
    </Span>
  )
}
