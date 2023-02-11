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
  align-items: center;
  justify-items: center;
  @media (max-height: 510px) {
    grid-template-columns: 1fr 2fr;
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
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  margin-top: 1rem;
  gap: 1rem;
  max-height: 45vh;
  overflow: auto;
`
export const Option = styled(animated.div)`
  display: flex;
  flex-direction: column;
  font-family: 'BlissProLight', sans-serif;
  p {
    text-align: left;
    font-size: 12px;
    max-width: 240px;
  }
  cursor: pointer;
`
export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    font-family: BlissProHeavy, sans-serif;
    margin: 9px;
    text-align: left;
  }
`
