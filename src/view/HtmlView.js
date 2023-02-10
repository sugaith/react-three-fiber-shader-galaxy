import React from 'react'
import styled from 'styled-components'
import { animated } from '@react-spring/web'
import MainPage from './MainPage/MainPage'
import NucleosPage from './NucleosPage/NucleosPage'
import FadeInOutView from './components/FadeInOutView'
import { useStore } from '../Store'

export default function HtmlView() {
  const initialButtonClicked = useStore((state) => state.initialButtonClicked)
  const isNucleosPageVisible = useStore((state) => state.isNucleosPageVisible)

  return (
    <Container>
      <FadeInOutView toggleFade={!initialButtonClicked}>
        <MainPage />
      </FadeInOutView>
      <FadeInOutView toggleFade={isNucleosPageVisible}>
        <NucleosPage />
      </FadeInOutView>
    </Container>
  )
}

const Container = styled(animated.div)`
  //background-color: #ae0dd2;
  //width: 100%;
  //height: 100%;
  //overflow: visible;
`
