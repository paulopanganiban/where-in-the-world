import styled from 'styled-components'

export const StyledH1 = styled.h1`
  cursor: pointer;
  margin-left: 70px;
  @media all and (max-width: 375px) {
    font-size: 1.2rem;
    margin-left: 15px;
  }
  @media all and (min-width: 376px) and (max-width: 800px) {
    margin-left: 20px;
  }
`

export const HeaderContainer = styled.nav(({ theme }) => ({
  position: 'sticky',
  top: 0,
  zIndex: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '80px',
  boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)',
  backgroundColor: theme.background,
  '@media all and (max-width: 375px)': {
    height: '100px'
  }
}))

export const DarkModeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 70px;
  @media all and (max-width: 375px) {
    margin-right: 10px;
  }
  @media all and (min-width: 376px) and (max-width: 800px) {
    margin-right: 20px;
  }
`
