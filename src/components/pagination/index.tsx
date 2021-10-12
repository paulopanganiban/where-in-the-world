import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import styled from "styled-components";
interface Props {
  itemsPerPage: number;
  paginate: (pageNumber: number) => void;
  totalItems: number;
}
const Pagination = ({ itemsPerPage, totalItems, paginate }: Props) => {
  const pageNumbers = [];
  const [active, setActive] = useState(false);
  const listElement = useRef<HTMLLIElement>(null);
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleClick = (number: number) => {
    paginate(number);
    setActive(true);
  };
  return (
    <Nav>
      <Ul>
        {pageNumbers.map((number) => (
          <Li ref={listElement} key={number} active={active}>
            <button
              onClick={() => {
                handleClick(number);
              }}
            >
              {number}
            </button>
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
`;
interface ListProps {
  active: boolean;
}
const Li = styled.li<ListProps>`
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  > button {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    width: 50px;
    height: 50px;
    cursor: pointer;
    background: none;
    border: none;
    text-decoration: none;
    :focus {
      color: red;
      font-size: 22px;
    }
  }
`;
const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;
