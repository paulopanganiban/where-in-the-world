import React from "react";
import styled from "styled-components";
interface Props {}
const FilterDropDown = ({}: Props) => {
  return (
    <FilterDropDownContainer>
      <h1>asdasd</h1>
    </FilterDropDownContainer>
  );
};

export default FilterDropDown;
const FilterDropDownContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.background};
  width: 200px;
  height: 55px;
  margin-right: 80px;
`;
