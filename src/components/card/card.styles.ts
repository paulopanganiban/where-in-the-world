import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CardContainer = styled(motion.div)(({theme}) => ({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  margin: '35px',
  backgroundColor: theme.background,
  width: '250px',
  height: '335px',
  borderRadius: '5px',
  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column'
}));

export const CardContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const InfoTag = styled.p(({theme}) => ({
  color: theme.text,
  margin: '3px 0',
  fontSize: '14px'
}))

export const TitleContainer = styled.div`
  flex: 1;
  margin: 0 22px;
  display: flex;
  align-items: center;
  margin-top: 5px;
`

export const DetailsContainer = styled.div`
  flex: 1.8;
  margin: 0 22px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`