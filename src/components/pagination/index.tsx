import React from "react";
import styled from 'styled-components'
interface Props {
  itemsPerPage: number;
  paginate: (pageNumber: number) => void;
  totalItems: number;
}
const Pagination = ({ itemsPerPage, totalItems, paginate }: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Nav>
      <Ul>
        {pageNumbers.map((number) => (
          <Li key={number}>
            <a onClick={() => paginate(number)}>{number}</a>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
};

export default Pagination;
const Ul = styled.ul`
display: inline-block;
list-style-type: none;
cursor: pointer;
`
const Li = styled.li`
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  &.active {
    background-color: red;
  }
`
const Nav = styled.nav`
display: flex;
justify-content: center;
`