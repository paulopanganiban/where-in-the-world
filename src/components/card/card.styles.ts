import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CardContainer = styled(motion.div)(({theme}) => ({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  margin: '0px 38px 38px 38px',
  backgroundColor: theme.background,
  width: '265px',
  height: '335px',
  borderRadius: '5px',
  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
  cursor: 'pointer',

  '.countryName': {
    textOverflow: 'ellipsis',
    fontSize: '18px',
    fontWeight: 600,
    margin: '25px 0 0 24px',
    width: '200px'
  },

  '.text__container': {
    margin: '25px 0 0 24px',
    padding: '0'
  }
}));

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  .countryName {
    text-overflow: ellipsis;
    font-size: 18px;
    font-weight: 600;
    margin: 25px 0 0 24px;
    width: 200px;
   }
     p {
    margin: 4px 4px 0 0;
    font-size: 14px;
    font-style: normal;
   }

  .text__container > span {
    margin: 0 4px 14px 0;
  }
   
     p {
    margin: 4px 4px 0 0;
    font-size: 14px;
    font-style: normal;
  }
`;
