import styled, { css } from 'styled-components'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const themeCSS = css(({ theme }) => ({
  backgroundColor: theme.background,
  color: theme.text
}))

export const Button = styled.button`
  ${themeCSS}
  background: none;
  border: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  width: 200px;
  height: 55px;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const FilterDropDownContainer = styled.div(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  borderRadius: '5px',
  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
  backgroundColor: theme.background,
  width: '200px',
  height: '55px',
  margin: '48px 0'
}))

export const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  margin: 0 20px 0 5px;
`

export const TitleSpan = styled.span`
  font-size: 14px;
  margin-left: 25px;
  font-weight: 300;
`

export const DropDownContentContainer = styled.div`
  opacity: 0;
  left: 0;
  z-index: 10;
  top: calc(100% + 0.75rem);
  position: absolute;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.background};
  width: 200px;
  transform: translateY(-10px);
  pointer-events: none;
  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;

  ${Button}:focus & {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  > span {
    width: 100%;
  }

  > span > ul > li {
    text-align: left;
    list-style-type: none;
    padding: 17px 0 16px 25px;
  }
`
