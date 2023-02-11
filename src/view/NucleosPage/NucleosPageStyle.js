import styled from 'styled-components'
import { animated } from '@react-spring/web'

export const Container = styled(animated.div)`
  position: relative;
  //background-color: #4f1572;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const MainView = styled(animated.div)``
export const SubPageBody = styled.div`
  //background-color: #8171be;
  width: clamp(360px, 90vw, 720px);
  display: grid;
  grid-template-rows: auto;
  gap: 0.5rem;
  justify-items: center;
  p {
    text-align: center;
    font-size: clamp(0.4rem, 1.52vh + 1.6vw, 1rem);
    white-space: pre-line;
    font-family: BlissProExtraLight, sans-serif;

    span {
      font-family: BlissProHeavy, sans-serif;
      font-size: clamp(0.4rem, 1vh + 1.6vw, 1.2rem);
    }
  }
  @media (max-height: 576px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-template-areas: '
      logo text 
      logo slides
    ';
  }
`
export const LogoSubPage = styled.div`
  display: grid;
  align-items: center;
  grid-row: 1/3;
  img {
  }
`
export const LogosContainer = styled.div`
  //background-color: aqua;
  margin: 0 auto;
  width: clamp(360px, 90vw, 720px);
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-height: 576px) {
    width: auto;
  }
`
export const Logo = styled(animated.div)`
  //background-color: green;
  display: flex;
  flex: 1;
  height: clamp(72px, 6vw, 300px);
  width: 150px;
  margin: 1rem;
  justify-content: center;
  img {
    min-height: ${({ active }) => (active ? 66 : 45)}px;
    -webkit-filter: ${({ active }) =>
      active ? `drop-shadow(0 0 2rem #fff)` : ''};
    cursor: pointer;
    height: clamp(66px, 6vw, 180px);
    @media (max-height: 576px) {
      height: clamp(66px, 1vh, 70px);
    }
  }
  img:hover {
    //min-height: clamp(60px, 3.6vw + 6vh, 180px);
  }
`
export const SubPagesSlidesContainer = styled(animated.div)`
  //background-color: #01a56d;
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: ${({ plural }) => (!plural ? 'center' : 'space-between')};
  align-items: center;
  width: 100%;
  padding-top: 0.5rem;
`

export const SlidesContainer = styled.div`
  //background-color: aquamarine;
  position: relative;
  display: flex;
  flex: 1;
  justify-content: center;
  height: clamp(150px, 45vh, 360px);
`
export const SlideView = styled(animated.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: clamp(0.4rem, 1vh + 1.6vw, 1rem);
  }
  p:nth-child(1) {
    font-family: BlissProHeavy, sans-serif;
  }
  img {
    height: clamp(150px, 36vh, 360px);
  }
`
