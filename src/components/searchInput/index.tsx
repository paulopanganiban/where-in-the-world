import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
interface Props {}
const SearchInput = ({}: Props) => {
  return (
    <SearchInputContainer>
      <StyledForm>
        <SearchIcon />
        <StyledInput
          type="text"
          id="fname"
          name="firstname"
          placeholder="Search for a country..."
        />
      </StyledForm>
    </SearchInputContainer>
  );
};

export default SearchInput;
const SearchInputContainer = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background};
  width: 480px;
  height: 55px;
  padding: 10px;
`;
const StyledInput = styled.input`
  margin-left: 5px;
  width: inherit;
`;
const StyledForm = styled.form`
  width: 90%;
  display: flex;
  align-items: center;
`;
