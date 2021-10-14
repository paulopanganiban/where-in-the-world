import React from "react";
import Button from "../button";
import {
  FilterDropDownContainer,
  TitleSpan,
  StyledExpandMoreIcon,
  DropDownContentContainer,
} from "./filterDropDown.styles";
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
