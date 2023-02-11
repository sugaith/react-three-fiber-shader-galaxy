import React from 'react'
import { useStore } from '../../Store'
import historiasLogo from './logo-historias.png'
import { bullets } from './HistoriasPageData'
import { BackButton } from '../GeneralStyles'
import {
  Container,
  InfoRow,
  MainView,
  Option,
  OptionsContainer,
} from './HistoriasPageStyle'
import { InfoBody } from '../BeneficiosPage/BeneficiosPageStyle'

export default function HistoriasPage() {
  const toggleHistoriasPage = useStore((state) => state.toggleHistoriasPage)
  const playToTopView = useStore((state) => state.playToTopView)
  const toggleMainMenuVisible = useStore((state) => state.toggleMainMenuVisible)

  function onBackButtonClick() {
    toggleHistoriasPage()
    playToTopView()
    toggleMainMenuVisible()
  }

  return (
    <>
      <BackButton onClick={onBackButtonClick} />
      <Container>
        <MainView>
          <img src={historiasLogo} alt={'Histórias Logo'} />
          <InfoBody>
            <div className="gallery">
              <div className="gallery-container">
                {bullets.map((bullet, index) => (
                  <Option key={index}>
                    <InfoRow>
                      <p>{bullet.personName}</p>
                    </InfoRow>
                    <p>{bullet.testimony}</p>
                  </Option>
                ))}
              </div>
            </div>
            <div className="gallery-controls"></div>

            <OptionsContainer></OptionsContainer>
          </InfoBody>
        </MainView>
      </Container>
    </>
  )
}
