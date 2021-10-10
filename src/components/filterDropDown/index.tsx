import React, { useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
interface Props {
  title: string;
  iconSize: "small" | "inherit" | "medium" | "large" | undefined;
}
const FilterDropDown = ({ title, iconSize }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <FilterDropDownContainer
      onMouseEnter={() => setOpen(true)}
      onClick={() => setOpen(!open)}
    >
      <TitleSpan>{title}</TitleSpan>
      <StyledExpandMoreIcon fontSize={iconSize} />
      {open && (
        <DropDownContentContainer
          onMouseLeave={() => setOpen(false)}
          onClick={() => setOpen(false)}
        >
          <a href="#">Africa</a>
          <a href="#">America</a>
          <a href="#">Asia</a>
          <a href="#">Europe</a>
          <a href="#">Oceania</a>
        </DropDownContentContainer>
      )}
    </FilterDropDownContainer>
  );
};

export default FilterDropDown;

const DropDownContentContainer = styled.div`
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.background};
  width: 200px;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;
const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  margin-right: 20px;
`;
const TitleSpan = styled.span`
  font-size: 14px;
  margin-left: 25px;
  font-weight: 300;
`;
const FilterDropDownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.background};
  width: 200px;
  height: 55px;
  margin: 48px 0;
`;
