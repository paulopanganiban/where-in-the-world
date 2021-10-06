import React from "react";
import styled from "styled-components";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
interface Props {
    title: string;
    iconSize:  "small" | "inherit" | "medium" | "large" | undefined;
}
const FilterDropDown = ({title, iconSize}: Props) => {
  return (
    <FilterDropDownContainer>
      <TitleSpan>{title}</TitleSpan>
      <StyledExpandMoreIcon fontSize={iconSize}/>
    </FilterDropDownContainer>
  );
};

export default FilterDropDown;
const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
margin-right: 20px;
`;
const TitleSpan = styled.span`
font-size: 14px;
margin-left: 25px;
font-weight: 300;
`
const FilterDropDownContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.background};
  width: 200px;
  height: 55px;
  margin-right: 80px;
`;
