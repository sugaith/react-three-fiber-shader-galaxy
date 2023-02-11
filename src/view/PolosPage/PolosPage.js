import React from 'react'
import { useStore } from '../../Store'
import { BackButton } from '../GeneralStyles'
import polosLogo from './logo-polos.png'
import polosMapa from './polos-mapa.png'
import blueCircleButton from '../../assets/icons/botao-principal-site.svg'
import {
  Container,
  MainView,
  InfoBody,
  MapImage,
  SlideButtons,
  EnterButton,
  MapButton,
} from './PolosPageStyle'

export default function PolosPage() {
  const togglePolosPage = useStore((state) => state.togglePolosPage)
  const playToTopView = useStore((state) => state.playToTopView)
  const toggleMainMenuVisible = useStore((state) => state.toggleMainMenuVisible)

  function onBackButtonClick() {
    togglePolosPage()
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
          <img src={polosLogo} />
          <InfoBody>
            <p>
              {`O POLO é a unidade de apoio presencial para o nosso estudante.
                  Nestes locais todas as atividades presenciais dos cursos são
                  desenvolvidas`}
            </p>
            <p>{`Nossos Polos:`.toUpperCase()}</p>
            <MapButton>
              <MapImage src={polosMapa} />
              <EnterButton>
                <a
                  {...aTagProps}
                  href={'https://www.cruzeirodosulvirtual.com.br/nossos-polos/'}
                >
                  <p>Entrar no mapa</p>
                  <SlideButtons src={blueCircleButton} />
                </a>
              </EnterButton>
            </MapButton>
          </InfoBody>
        </MainView>
      </Container>
    </>
  )
}
