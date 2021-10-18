import React from "react";
import  * as S from "./filterDropDown.styles";
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
    <S.FilterDropDownContainer>
      <S.Button>
        <div>
          <S.TitleSpan>{title}</S.TitleSpan>
          <S.StyledExpandMoreIcon fontSize={iconSize} />
        </div>

        <S.DropDownContentContainer>
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
        </S.DropDownContentContainer>
      </S.Button>
    </S.FilterDropDownContainer>
  );
};

export default FilterDropDown;
