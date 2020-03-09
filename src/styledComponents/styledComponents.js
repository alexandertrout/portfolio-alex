import styled from 'styled-components';

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
  font-size: 30px;
  margin: 2vw 0vw;
    @media only screen and (max-width: 600px) {
  margin: 5vw 0vw;
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

export { StyledTop, OuterContainer, TopTitle }