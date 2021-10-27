import React, { useState } from 'react'
import SearchInput from '../components/searchInput'
import FilterDropDown from '../components/filterDropDown'
import Head from 'next/head'
import List from '../components/list'
import BasicPagination from '../components/pagination'
import { CountryInterface } from '../types/interfaces'
import * as S from '../styles/index.styles'
import { regions } from '../constants/regions'
const defaultEndpoint = 'https://restcountries.com/v3.1/all'

export const getStaticProps = async () => {
  try {
    const res = await fetch(defaultEndpoint)
    const data = await res.json()
    return { props: { data } }
  } catch (err) {
    console.log(err)
  }
}

const Home = ({ data }: { data: CountryInterface[] }) => {
  const [fetchedData] = useState(data)
  // Search Keyword State
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('')
  const filterOrSearch = () => {
    if (filter) {
      return fetchedData
        .filter(
          (country) => !country.name.common.search(new RegExp(searchTerm, 'ig'))
        )
        .filter((country) => country.region === filter)
    }
    return fetchedData.filter(
      (country) => !country.name.common.search(new RegExp(searchTerm, 'ig'))
    )
  }
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(12)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = fetchedData.slice(indexOfFirstItem, indexOfLastItem)
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }
  return (
    <div>
      <Head>
        <title> Where in the world </title>
      </Head>
      <S.MainContainer>
        <S.MainWrapper>
          <S.TopMainContainer>
            <SearchInput
              searchKeyWord={setSearchTerm}
              searchTerm={searchTerm}
            />
            <FilterDropDown
              regions={regions}
              title={'Filter by Region'}
              iconSize={'small'}
              searchKeyWord={setFilter}
            />
          </S.TopMainContainer>
          <S.BottomMainContainer>
            {fetchedData && (
              <List
                data={searchTerm.length < 1 ? currentItems : filterOrSearch()}
                noDataFoundText={'No Countries Available'}
              />
            )}
          </S.BottomMainContainer>
          {!searchTerm && (
            <>
              <BasicPagination
                itemsPerPage={itemsPerPage}
                totalItems={fetchedData.length}
                paginate={paginate}
              />
            </>
          )}
        </S.MainWrapper>
      </S.MainContainer>
    </div>
  )
}

export default Home
