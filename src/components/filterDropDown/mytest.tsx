import styled, { css } from "styled-components";

function MyTest() {
  return (
    <Header>
      <Dropdown>
        <DropdownMenu>Dropdown Content</DropdownMenu>
        <Button>Information</Button>
      </Dropdown>
      <a href="#">Test</a>
      <Button>Login</Button>
    </Header>
  );
}

export default MyTest;
const Link = css`
  background: none;
  border: none;
  text-decoration: none;
  color: #777;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  padding: 0;
  &:hover {
    color: green;
  }
`;

const Button = styled.button`
  ${Link}
`;
const DropdownMenu = styled.div`
  // we cant style transition this container with display: none
  opacity: 0;
  left: 0;
  top: calc(100% + 0.25rem);
  position: absolute;
  padding: 0.75rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.background};
  width: 200px;
`;
const Dropdown = styled.div`
  position: relative;
  > ${Button} {
      :focus {
          opacity: 1;
      }
  }
`;

const Header = styled.header`
  display: flex;
  align-items: baseline;
  padding: 0.5rem;
  gap: 1rem;
`;


const isActive = css`
  opacity: 1;
`;
