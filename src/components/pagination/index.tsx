import Stack from "@mui/material/Stack";
import { Nav, StyledPagination } from "./pagination.styles";

interface Props {
  itemsPerPage: number;
  paginate: (pageNumber: any) => void;
  totalItems: number;
}
const BasicPagination = ({ itemsPerPage, totalItems, paginate }: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleClick = (number: number | null) => {
    if(!number) return;
    paginate(number);
  };
  return (
    <Nav>
      <Stack spacing={2}>
        <StyledPagination
          count={pageNumbers && pageNumbers.length}
          boundaryCount={5}
          color={'primary'}
          onChange={(event, value) => handleClick(value)}
        />
      </Stack>
    </Nav>
  );
};

export default BasicPagination;
