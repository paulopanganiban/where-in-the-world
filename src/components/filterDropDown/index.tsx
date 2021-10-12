import React, { useState } from "react";
import styled, { css } from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
interface Props {
  searchKeyWord: (searchTerm: string) => void;
  title: string;
  iconSize: "small" | "inherit" | "medium" | "large" | undefined;
  regions: string[];
}
const FilterDropDown = ({ title, iconSize, searchKeyWord, regions }: Props) => {
  const handleClick = (region: string) => {
    searchKeyWord(region);
  };
  return (
    <FilterDropDownContainer>
      <Button>
        <div>
          <TitleSpan>{title}</TitleSpan>
          <StyledExpandMoreIcon fontSize={iconSize} />
        </div>

        <DropDownContentContainer>
          <span>
            <ul>
              {regions.map((region) => (
                <li
                  key={region}
                  data-name={region}
                  onClick={() => handleClick(region)}
                >
                  {region}
                </li>
              ))}
            </ul>
          </span>
        </DropDownContentContainer>
      </Button>
    </FilterDropDownContainer>
  );
};

export default FilterDropDown;
const themeCSS = css`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
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
`;

const FilterDropDownContainer = styled.div`
  align-items: center;
  display: flex;

  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.background};
  width: 200px;
  height: 55px;
  margin: 48px 0;
`;
const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  margin: 0 20px 0 5px;
`;
const TitleSpan = styled.span`
  font-size: 14px;
  margin-left: 25px;
  font-weight: 300;
`;

const DropDownContentContainer = styled.div`
  // we cant style transition to this container with display: none
  opacity: 0;
  left: 0;
  z-index: 10;
  top: calc(100% + 0.75rem);
  position: absolute;
  /* padding: 0.75rem; */
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
`;
