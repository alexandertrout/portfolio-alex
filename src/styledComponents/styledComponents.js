import styled, {keyframes} from 'styled-components';
import { fadeInLeft, fadeInRight } from 'react-animations';

const leftAnimation = keyframes`${fadeInLeft}`;
const rightAnimation = keyframes`${fadeInRight}`;

const StyledTop = styled.div`
  padding: 0vw 10vw;
  color: black;
  background-color: white;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: sticky;
  top: 0;
  z-index: 999;
`

const TopTitle = styled.div`
@font-face {
  font-family: prox;
  src: url(./proximanova-bold.otf);
  font-weight: normal;
}
  font-size: 30px;
  font-family: prox;
  margin: 2vw 0vw;
    @media only screen and (max-width: 600px) {
  line-height: 60px;
  margin: 6vw 0vw;
}
  font-display: bold;
  color: black;
`

const OuterContainer = styled.section`
  padding: 1em 10vw;
  color: black;
  font-size: 0.7em;
  text-align: center;
`

export { StyledTop, OuterContainer, TopTitle, leftAnimation, rightAnimation }