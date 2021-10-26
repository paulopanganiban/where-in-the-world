import Pagination from "@mui/material/Pagination";
import styled from "styled-components";

export const StyledPagination = styled(Pagination)(({theme}) => ({
  '> ul': {
    '& .MuiPaginationItem-root': {
      color: theme.text
    }
  }
}))

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 10px;
`;