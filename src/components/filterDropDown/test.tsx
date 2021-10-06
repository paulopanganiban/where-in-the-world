import React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
interface Props {
    title: string;
    iconSize: "small" | "inherit" | "medium" | "large" | undefined;
  }
const Test = ({ title, iconSize }: Props) => {
  return (
    <DropDown>
      <TitleSpan>{title}</TitleSpan>
      <StyledExpandMoreIcon fontSize={iconSize} />
      <DropDownContent>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </DropDownContent>
    </DropDown>
  );
};

export default Test;


const DropDownContent = styled.div`
  border-radius: 5px;
  width: 200px;
  height: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  display: none;
  position: absolute;
  background-color: ${({ theme }) => theme.background};
  z-index: 1;
  > a {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    :hover {
      background-color:  ${({ theme }) => theme.background};
    }
  }
`;
const DropDown = styled.div`
  position: relative;
  display: inline-block;
  :hover ${DropDownContent} {
    display: block;
  }
`;
const TitleSpan = styled.span`
  font-size: 14px;
  margin-left: 25px;
  font-weight: 300;
`;
const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  margin-right: 20px;
`;