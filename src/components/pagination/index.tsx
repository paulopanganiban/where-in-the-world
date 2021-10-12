import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import usePagination from "@mui/material/Pagination";

interface Props {
  itemsPerPage: number;
  paginate: (pageNumber: number) => void;
  totalItems: number;
}
const BasicPagination = ({ itemsPerPage, totalItems, paginate }: Props) => {
  const pageNumbers = [];
  const [page, setPage] = useState(1);
  const [active, setActive] = useState(false);
  const listElement = useRef<HTMLLIElement>(null);
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleClick = (number: number) => {
    paginate(number);
  };
  return (
    <Nav>
      <Stack spacing={2}>
        <Pagination
          count={10}
          color="secondary"
          onChange={(event, value) => handleClick(value)}
        />
      </Stack>
    </Nav>
  );
};

export default BasicPagination;
const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;
