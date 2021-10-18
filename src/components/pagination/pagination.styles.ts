import Pagination from "@mui/material/Pagination"
import styled from 'styled-components'
export const StyledPagination = styled(Pagination)`
 > ul {
   & .MuiPaginationItem-root {
     color: ${({ theme }) => theme.text}
   }
 }
`
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 10px;
`;
