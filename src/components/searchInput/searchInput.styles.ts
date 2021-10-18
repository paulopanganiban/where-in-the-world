import styled from "styled-components";
export const IconWrapper = styled.span`
transition: all 0.2s ease-in-out;
height: 100%;
  margin-left: 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const SearchInputContainer = styled.div`
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
export const StyledInput = styled.input`
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
export const StyledForm = styled.form`
  width: 90%;
  display: flex;
  align-items: center;
`;