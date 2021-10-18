import styled from "styled-components";


export const StyledH1 = styled.h1`
cursor: pointer;
margin-left: 100px;
@media all and (max-width: 375px) { 
  font-size: 1.5rem;
  margin-left: 15px;
}
`
export const HeaderContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 77px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  background-color: ${({ theme }) => theme.background};
`;
export const DarkModeContainer = styled.div`
display: flex;
align-items: center;
margin-right: 80px;
@media all and (max-width: 375px) { 
  margin-right: 10px;
}
`
