import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
interface Props {}
const SearchInput = ({}: Props) => {
  return (
    <SearchInputContainer>
      <StyledForm>
        <StyledSearchIcon />
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
const StyledSearchIcon = styled(SearchIcon)`
  margin-left: 32px;
`;
const SearchInputContainer = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background};
  width: 480px;
  height: 55px;
  margin: 48px 20px 48px 80px;
`;
const StyledInput = styled.input`
  caret-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  margin-left: 30px;
  border: none;
  width: inherit;
  background-color: Transparent;
  outline: none;
`;
const StyledForm = styled.form`
  width: 90%;
  display: flex;
  align-items: center;
`;
