import React from "react";
import { Span } from '../../styles/country/[id].styles'

type Props = {
    name: string
    data: string | number | string[]
}

export const ListItem = ({ name, data } : Props) => {
  return (
    <li>
      <Span>
        <h4>{name}:</h4>
        <p>{data}</p>
      </Span>
    </li>
  );
};
