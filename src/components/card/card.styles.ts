import styled from 'styled-components'
import { motion } from 'framer-motion'
export const CardContainer = styled(motion.div)`
  overflow: hidden;
  white-space: nowrap;
  margin: 0px 38px 38px 38px;
  background-color: ${({ theme }) => theme.background};
  width: 265px;
  height: 335px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  .countryName {
    text-overflow: ellipsis;
    font-size: 18px;
    font-weight: 600;
    margin: 25px 0 0 24px;
    width: 200px;
   }
   .text__container {
    margin: 25px 0 0 24px;
    padding: 0;
   }
`;
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
`;
