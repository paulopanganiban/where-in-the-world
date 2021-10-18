import styled from 'styled-components'

interface StyledButtonProps {
    width?: string;
    height?: string;
    margin?: string;
}
export const StyledButton = styled.button<StyledButtonProps>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    margin: ${({ margin }) => margin};
    border-radius: 5px;
    border: none;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  `;
