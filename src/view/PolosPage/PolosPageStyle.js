import styled from 'styled-components'
import { animated } from '@react-spring/web'

export const Container = styled(animated.div)`
  position: relative;
  top: 53vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  max-width: 630px;
`
export const MainView = styled(animated.div)`
  color: white;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1.5rem;
  align-items: center;
  justify-items: center;
  @media (max-height: 510px) {
    grid-template-columns: 1fr 2fr;
  }
`
export const BackButton = styled.div`
  position: fixed;
  top: 0;
  left: 3%;
  z-index: 3;
  cursor: pointer;
`
export const InfoBody = styled.div`
  display: grid;
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  grid-row-gap: 0.5rem;
  padding: 0 1rem;
  p {
    font-family: BlissProBold, sans-serif;
    text-align: center;
    font-size: clamp(0.4rem, 1vh + 1.6vw, 1rem);
  }
  p:nth-child(1) {
    margin-top: 0.5rem;
  }
`
export const MapImage = styled.img`
  height: clamp(130px, 27vh, 300px);
`
export const EnterButton = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-height: 60px;
  gap: 1rem;
  margin-top: 3rem;
  p {
    padding: 0;
    margin: 0;
  }
`
export const SlideButtons = styled(animated.img)`
  width: 45px;
  height: 45px;
  max-height: 45px;
  cursor: pointer;
  img {
    width: 45px;
    height: 45px;
    max-height: 45px;
  }
`
export const MapButton = styled.div`
  display: flex;
  flex: 1;
`
