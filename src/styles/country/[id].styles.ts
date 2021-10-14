import styled from 'styled-components'
import { motion } from 'framer-motion'
export const ListSpan = styled.span`
  width: "100%";
  display: "flex";
  flex-wrap: "wrap";
  align-items: "center";
  h4 {
    margin-top: 77px;
  }

`;
export const H4 = styled.h4`
  margin-right: 3px;
`;
export const ButtonWrapper = styled.span`
  margin: 5px;
`;
export const Span = styled.span<{ margin?: string }>`
  display: flex;
  margin: 8px 0;
  margin: ${({ margin }) => margin};
`;
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
`;
export const BottomWrapper = styled.div`
  display: flex;
  flex: 0.8;
  justify-content: space-between;
  flex-wrap: wrap;
`;
interface ContentProps {
    right?: boolean;
}
export const Content = styled.div<ContentProps>`
  margin-right: 20px;
   ul {
    list-style-type: none;
  }
`;
export const CountryContainer = styled(motion.div)`
  display: block;
`;
export const CountryWrapper = styled.div`
  width: 80%;
  right: 0;
  margin: 0 auto;
`;
export const TopContainer = styled.div`
  height: 112px;
  display: flex;
  align-items: center;
`;
export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const LeftContainer = styled.div`
  max-width: 560px;
  max-height: 401px;
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 625px;
  > h1 {
    margin-top: 30px;
  }
  @media all and (max-width: 1000px) {
  }
`;
