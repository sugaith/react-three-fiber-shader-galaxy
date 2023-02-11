import styled from 'styled-components'
import { animated } from '@react-spring/web'

export const Container = styled(animated.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
`
export const MainView = styled(animated.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  max-width: 630px;
  @media (max-height: 490px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`
export const Top = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
    text-align: center;
    font-size: 1vmax;
  }
`
export const CentrosLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  img {
    max-width: 240px;
    margin-right: 15px;
  }
`
export const LogosContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;
  img {
    margin: 24px;
    max-height: 45px;
    cursor: pointer;
  }
`
