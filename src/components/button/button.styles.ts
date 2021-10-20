import styled from 'styled-components'

interface StyledButtonProps {
    width?: string;
    height?: string;
    margin?: string;
}

export const StyledButton = styled.button<StyledButtonProps>(({width, height, theme, margin}) => ({
    width,
    height,
    backgroundColor: theme.background,
    color: theme.text,
    margin,
    borderRadius: '5px',
    border: 'none',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
    cursor: 'pointer'
}))

