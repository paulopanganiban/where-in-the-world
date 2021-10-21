import styled from "styled-components";

export const IconWrapper = styled.span`
  transition: all 0.2s ease-in-out;
  height: 100%;
  margin-left: 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SearchInputContainer = styled.div(({theme}) => ({
  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '5px',
  backgroundColor: theme.background,
  width: '480px',
  height: '55px',
  margin: '48px 0 0 0',

  '@media all and (max-width: 375px)': {
    width: '300px'
  }
}));

export const StyledInput = styled.input(({theme}) => ({
  caretColor: theme.text,
  color: theme.text,
  marginLeft: '30px',
  border: 'none',
  width: 'inherit',
  backgroundColor: theme.background,
  outline: 'none',

  '::placeholder': {
    color: theme.text
  }
}));

export const StyledForm = styled.form`
  width: 90%;
  display: flex;
  align-items: center;
`;
