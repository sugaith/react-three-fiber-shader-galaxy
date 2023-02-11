import React from 'react'
import styled from 'styled-components'
import { animated } from '@react-spring/web'
import MainPage from './MainPage/MainPage'
import NucleosPage from './NucleosPage/NucleosPage'
import MenuBottom from './MainPage/MenuBottom'
import FadeInOutView from './components/FadeInOutView'
import PolosPage from './PolosPage/PolosPage'
import MenuTop from './MainPage/MenuTop'
import AcademicosPage from './AcademicosPage/AcademicosPage'
import { useStore } from '../Store'
import BeneficiosPage from './BeneficiosPage/BeneficiosPage'
import HistoriasPage from './HistoriasPage/HistoriasPage'
import TecnologiaPage from './TecnologiaPage/TecnologiaPage'
import CentrosPage from './CentrosPage/CentrosPage'

export default function HtmlView() {
  const initialButtonClicked = useStore((state) => state.initialButtonClicked)
  const isNucleosPageVisible = useStore((state) => state.isNucleosPageVisible)
  const isPolosPageVisible = useStore((state) => state.isPolosPageVisible)
  const isCentrosPageVisible = useStore((state) => state.isCentrosPageVisible)
  const isAcademicosPageVisible = useStore(
    (state) => state.isAcademicosPageVisible,
  )
  const isBeneficiosPageVisible = useStore(
    (state) => state.isBeneficiosPageVisible,
  )
  const isHistoriasPageVisible = useStore(
    (state) => state.isHistoriasPageVisible,
  )
  const isTecnologiaPageVisible = useStore(
    (state) => state.isTecnologiaPageVisible,
  )
  const isMenuBottomVisible =
    isNucleosPageVisible ||
    isPolosPageVisible ||
    isCentrosPageVisible ||
    isBeneficiosPageVisible ||
    isTecnologiaPageVisible ||
    isHistoriasPageVisible ||
    isAcademicosPageVisible

  return (
    <Container>
      {/*<MenuTop toggleMenu={isMenuBottomVisible || !initialButtonClicked} />*/}
      <MenuTop toggleMenu={true} />
      <FadeInOutView toggleFade={!initialButtonClicked}>
        <MainPage />
      </FadeInOutView>
      <FadeInOutView toggleFade={isNucleosPageVisible}>
        <NucleosPage />
      </FadeInOutView>
      <FadeInOutView toggleFade={isPolosPageVisible}>
        <PolosPage />
      </FadeInOutView>
      <FadeInOutView toggleFade={isAcademicosPageVisible}>
        <AcademicosPage />
      </FadeInOutView>
      <FadeInOutView toggleFade={isBeneficiosPageVisible}>
        <BeneficiosPage />
      </FadeInOutView>
      <FadeInOutView toggleFade={isHistoriasPageVisible}>
        <HistoriasPage />
      </FadeInOutView>
      <FadeInOutView toggleFade={isTecnologiaPageVisible}>
        <TecnologiaPage />
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
