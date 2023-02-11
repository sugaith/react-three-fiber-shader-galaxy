import React from 'react'
import { useStore } from '../../Store'
import centrosLogo from './logo-centro.png'
import cesucaLogo from './cesuca.svg'
import ceunspLogo from './ceunsp.svg'
import fassLogo from './FASS.svg'
import moduloLogo from './modulo.svg'
import udfLogo from './UDF.svg'
import {
  Container,
  MainView,
  Top,
  CentrosLogo,
  LogosContainer,
} from './CentrosPageStyle'
import { BackButton } from '../GeneralStyles'

export default function CentrosPage() {
  const toggleCentrosPage = useStore((state) => state.toggleCentrosPage)
  const playToTopView = useStore((state) => state.playToTopView)
  const toggleMainMenuVisible = useStore((state) => state.toggleMainMenuVisible)

  function onBackButtonClick() {
    toggleCentrosPage()
    playToTopView()
    toggleMainMenuVisible()
  }

  const aTagProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  }
  return (
    <>
      <BackButton onClick={onBackButtonClick} />
      <Container>
        <MainView>
          <Top>
            <CentrosLogo>
              <img src={centrosLogo} />
            </CentrosLogo>
          </Top>
          <LogosContainer>
            <a {...aTagProps} href={'https://www.cesuca.edu.br/'}>
              <img src={cesucaLogo} />
            </a>
            <a {...aTagProps} href={'https://www.udf.edu.br/'}>
              <img src={udfLogo} />
            </a>
            <a {...aTagProps} href={'https://www.ceunsp.edu.br/'}>
              <img src={ceunspLogo} />
            </a>
            <a {...aTagProps} href={'https://www.fass.edu.br/'}>
              <img src={fassLogo} />
            </a>
            <a {...aTagProps} href={'https://www.modulo.edu.br/'}>
              <img src={moduloLogo} />
            </a>
          </LogosContainer>
        </MainView>
      </Container>
    </>
  )
}
