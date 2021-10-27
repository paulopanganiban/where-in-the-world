import styled from 'styled-components'

export const BottomMainContainer = styled.div`
  min-height: 100vh;
`

export const TopMainContainer = styled.div`
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 70px;
  @media all and (min-width: 376px) and (max-width: 800px) {
    margin: 0 30px;
  }
`

export const MainContainer = styled.div``

export const MainWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`
