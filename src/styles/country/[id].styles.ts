import styled from 'styled-components'

export const Span = styled.span<{ margin?: string }>(({ margin }) => ({
  margin: `${margin} 0`,
  display: 'flex'
}))

export const RootContainer = styled.main`
  min-height: 100vh;
`

export const BackButtonContainer = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  padding-top: 20px;
`

export const BackBtn = styled.button(({ theme }) => ({
  border: 'none',
  outline: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  width: '100px',
  display: 'flex',
  justifyContent: 'center',
  height: '30px',
  alignItems: 'center',
  backgroundColor: theme.background,
  color: theme.text,
  margin: '0 5vw',
  '@media screen and (max-width: 700px)': {
    margin: '0 30px'
  }
}))

export const CountryContainer = styled.div`
  display: flex;
  padding: 0 0 2rem 0;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
  }
`

export const CountryImage = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 0 30px;
`

export const CountryDetailsContainer = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin: 0 30px;
  h1 {
    font-weight: 800;
  }
  @media screen and (min-width: 320px) and (max-width: 900px) {
    margin-top: 50px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 901px) and (max-width: 1200px) {
    margin-top: 50px;
    margin-bottom: 30px;
  }
`

export const CountryInfos = styled.div`
  flex: 2;
  display: flex;
  margin: 0 30px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (min-width: 769px) and (max-width: 1050px) {
    flex-direction: column;
  }
`

export const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const RightContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    margin-top: 30px;
  }
  @media screen and (min-width: 769px) and (max-width: 1050px) {
    margin-top: 30px;
  }
`
export const CountryBorders = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  margin: 0 30px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    margin-top: 30px;
  }
  @media screen and (min-width: 769px) and (max-width: 1050px) {
    margin-top: 30px;
  }
`
export const BorderItem = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '25px',
  width: 'max-content',
  padding: '0 0.5rem',
  backgroundColor: theme.background,
  margin: '4px',
  borderRadius: '3px',
  fontWeight: 300,
  cursor: 'pointer',
  fontSize: '13px'
}))
