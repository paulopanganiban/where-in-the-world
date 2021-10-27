import React from 'react'
import Card from '../card'
import { CountryInterface } from '../../types/interfaces'
import { ListContainer } from './list.styles'

interface ListProps {
  data: CountryInterface[]
  noDataFoundText?: string
}

const List = ({ data, noDataFoundText }: ListProps) => {
  const renderDataList = data.map(
    ({ name, flags, population, region, capital, cca3, currencies }) => (
      <Card
        key={cca3}
        cca3={cca3}
        name={name}
        flags={flags}
        population={population}
        region={region}
        capital={capital}
        currencies={currencies}
      />
    )
  )

  return (
    <ListContainer>
      {renderDataList.length > 0 ? (
        renderDataList
      ) : (
        <span>{noDataFoundText}</span>
      )}
    </ListContainer>
  )
}

export default List
