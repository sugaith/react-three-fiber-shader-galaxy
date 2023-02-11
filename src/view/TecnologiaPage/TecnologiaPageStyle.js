import styled from 'styled-components'
import { animated } from '@react-spring/web'

export const Container = styled(animated.div)`
  //background-color: #4f1572;
  position: relative;
  top: 53vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  max-width: 900px;
`
export const MainView = styled(animated.div)`
  //background-color: #4f1572;
  display: flex;
  width: clamp(360px, 90vw, 630px);
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    text-align: center;
    letter-spacing: 1px;
  }
  @media (max-height: 480px) {
    //background-color: wheat;
    grid-gap: 1rem;
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 2fr;
  }
`
export const LogoSubPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  img {
    width: clamp(234px, 3vw + 30vh, 350px);
  }
  p {
    font-family: 'BlissProBold', sans-serif;
  }
  p:nth-child(1) {
    font-size: clamp(2.4rem, 3vh, 1rem);
    line-height: 36px;
  }
  p:nth-child(2) {
    margin-top: 1rem;
    font-size: 0.8rem;
  }
`
export const SubPagesContainer = styled.div`
  //background-color: cadetblue;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  p {
    max-width: 450px;
  }
`
export const OptionsContainer = styled(animated.div)`
  //background-color: cadetblue;
  position: relative;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  max-height: 45vh;
  overflow: auto;
`
export const Option = styled(animated.div)`
  display: flex;
  flex-direction: column;
  height: 90px;
  width: 150px;
  margin: 9px;
  font-family: 'BlissProBold', sans-serif;
  p {
    font-size: 15px;
  }
  cursor: pointer;
`
export const SubOption = styled(animated.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 200px;
  margin: 9px;
  font-family: 'BlissProBold', sans-serif;
  p {
    text-align: left;
    font-size: 12px;
    margin: 0 0 0 9px;
  }
  p:nth-child(2) {
    font-family: 'BlissProExtraLight', sans-serif;
    font-size: 12px;
  }

  cursor: pointer;
`
export const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
`
export const SlideButtons = styled(animated.img)`
  height: 36px;
`
export const SlideButtonsLeft = styled(animated.img)`
  height: 45px;
  transform: rotateZ(180deg);
`
