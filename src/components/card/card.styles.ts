import styled from 'styled-components'
import { motion } from 'framer-motion'
export const TextContainer = styled.div`
  margin: 25px 0 0 24px;
  padding: 0;
`;
export const TextWrapper = styled.div`
  display: flex;
  margin: 0 4px 14px 0;
  padding: 0;
`;
interface TextProps {
    thin?: boolean;
  }
export const Text = styled.p<TextProps>`
  margin: 0 4px 0 0;
  font-size: 14px;
  font-style: normal;
  font-weight: ${({ thin }) => (thin ? 0 : 300)};
`;
export const Span = styled.span`
  text-overflow: ellipsis;
  font-size: 18px;
  font-weight: 600;
  margin: 25px 0 0 24px;
`;
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
`;
// export const NextImage = styled(Image)`
//   height: 161px;
//   width: 100%;
//   object-fit: cover;
//   border-radius: 5px 5px 0 0;
// `;
export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
