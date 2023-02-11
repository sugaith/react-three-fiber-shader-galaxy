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
export const Logo = styled.img`
  width: clamp(180px, 18vw + 20vh, 270px);
`
export const InfoBody = styled.div`
  display: grid;
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  grid-row-gap: 0.5rem;
  padding: 0 15px;
  p {
    text-align: center;
    font-size: clamp(0.81rem, 3vw, 1rem);
  }
  p:nth-child(1) {
    margin-top: 0.5rem;
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
export const OptionsContainer = styled(animated.div)`
  width: clamp(200px, 50vw, 420px);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  justify-content: center;
  margin-top: 1rem;
`
export const Option = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin: 9px;
  font-family: 'BlissProLight', sans-serif;
  p {
    font-size: 12px;
    max-width: 90px;
  }
  cursor: pointer;
`
