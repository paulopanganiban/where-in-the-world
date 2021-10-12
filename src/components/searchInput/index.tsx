import React, { useEffect, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
interface Props {
  term: string;
  searchTerm: string | ReadonlyArray<string> | number | undefined;
  searchKeyWord: (value: string) => void;
}
const SearchInput = ({ searchTerm, searchKeyWord }: any) => {
  const inputElement = useRef<HTMLInputElement>(null);
  const getSearchTerm = (e: React.FormEvent<HTMLInputElement>) => {
    const element = e.currentTarget as HTMLInputElement;
    const value = element.value;
    // grab the value then pass it to the parent
    // root index.tsx
    searchKeyWord(value);
  };
  return (
    <SearchInputContainer>
      <StyledForm>
        <IconWrapper>
        {searchTerm !== "" ? <CloseIcon 
        style={{color: 'red'}}
        onClick={() => {searchKeyWord("")}}
        /> : <SearchIcon />}
        </IconWrapper>

        <StyledInput
          ref={inputElement}
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={getSearchTerm}
        />
      </StyledForm>
    </SearchInputContainer>
  );
};

export default SearchInput;
const IconWrapper = styled.span`
transition: all 0.2s ease-in-out;
height: 100%;
  margin-left: 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const SearchInputContainer = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background};
  width: 480px;
  height: 55px;
  margin: 48px 0 0 0;
  @media all and (max-width: 375px) {
    width: 300px;
  }
`;
const StyledInput = styled.input`
  caret-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  margin-left: 30px;
  border: none;
  width: inherit;
  background-color: Transparent;
  outline: none;
  ::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;
const StyledForm = styled.form`
  width: 90%;
  display: flex;
  align-items: center;
`;
