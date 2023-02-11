import React from 'react'
import styled from 'styled-components'
import { animated } from '@react-spring/web'
import MainPage from './MainPage/MainPage'
import MenuBottom from './MainPage/MenuBottom'
import FadeInOutView from './components/FadeInOutView'
import { useStore } from '../Store'
import CentrosPage from './CentrosPage/CentrosPage'

export default function HtmlView() {
  const initialButtonClicked = useStore((state) => state.initialButtonClicked)
  const isCentrosPageVisible = useStore((state) => state.isCentrosPageVisible)
  const isMenuBottomVisible = isCentrosPageVisible

  return (
    <Container>
      <FadeInOutView toggleFade={!initialButtonClicked}>
        <MainPage />
      </FadeInOutView>
      <FadeInOutView toggleFade={isCentrosPageVisible}>
        <CentrosPage />
      </FadeInOutView>
      <MenuBottom toggleMenu={isMenuBottomVisible} />
    </Container>
  )
}

const Container = styled(animated.div)`
  //background-color: #ae0dd2;
  //width: 100%;
  //height: 100%;
  //overflow: visible;
`
