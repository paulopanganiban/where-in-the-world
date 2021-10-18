import React, {  useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { SearchInputContainer, StyledForm, IconWrapper, StyledInput } from "./searchInput.styles";
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
