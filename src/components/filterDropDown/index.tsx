import React, { useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import MyTest from "./mytest";
interface Props {
  searchKeyWord: (searchTerm: string) => void;
  title: string;
  iconSize: "small" | "inherit" | "medium" | "large" | undefined;
}
const FilterDropDown = ({ title, iconSize, searchKeyWord }: Props) => {
  const [open, setOpen] = useState(false);
  const [keyWord, setKeyWord] = useState("");
  // const getFilterKeyWord = (e) => {

  // }
  return (
    <FilterDropDownContainer>
      <Button>
        <TitleSpan>{title}</TitleSpan>
        <StyledExpandMoreIcon fontSize={iconSize} />

        <DropDownContentContainer>
          <span>
            <a>Africa</a>
            <a href="#">America</a>
            <a href="#">Asia</a>
            <a href="#">Europe</a>
            <a href="#">Oceania</a>
          </span>
        </DropDownContentContainer>
      </Button>
    </FilterDropDownContainer>
  );
};

export default FilterDropDown;
const Button = styled.button`
  background: none;
  border: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;
const FilterDropDownContainer = styled.div`
  display: flex;
  align-items: center;

  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.background};
  width: 200px;
  height: 55px;
  margin: 48px 0;
`;
const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  margin-right: 20px;
`;
const TitleSpan = styled.span`
  font-size: 14px;
  margin-left: 25px;
  font-weight: 300;
`;

const DropDownContentContainer = styled.div`
  // we cant style transition this container with display: none
  opacity: 0;
  left: 0;
  z-index: 10;
  top: calc(100% + 1.25rem);
  position: absolute;
  padding: 0.75rem;
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
    display: flex;
    flex-direction: column;
  }
`;
