import styled, { css } from "styled-components";

function MyTest() {
  return (
    <Header>
      <Dropdown>
        
        <Button>Information
        <DropdownMenu>Dropdown Content</DropdownMenu>

        </Button>
        
      </Dropdown>
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
  :hover {
    color: green;
  }
`;
const Button = styled.button`
  ${Link}
`;
const Dropdown = styled.div`
  position: relative;
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
  transform: translateY(-10px);
  pointer-events: none;
  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
  ${Button}:focus & {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
`;



const Header = styled.header`
  display: flex;
  align-items: baseline;
  padding: 0.5rem;
  gap: 1rem;
`;
