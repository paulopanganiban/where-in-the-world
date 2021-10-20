import styled from 'styled-components'

export const Button = styled.button(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    backgroundRepeat: 'no-repeat',
    border: 'none',
    color: theme.text,
    cursor: 'pointer',
    fontSize: '0.8rem',
    padding: '0.6rem',
    textAlign: 'center',
    fontWeight: 'bold'
}))