import React, { useEffect, useState } from 'react'
import { useStore } from '../../Store'
import beneficiosLogo from './logo-beneficios.png'
import blueCircleButton from '../../assets/icons/botao-principal-site.svg'
import { beneficiosMainPhrase, bullets } from './BeneficiosPageData'
import { ModalIFrame } from '../ModalIFrame'
import {
  Container,
  InfoBody,
  Logo,
  MainView,
  Option,
  OptionsContainer,
  SlideButtons,
} from './BeneficiosPageStyle'
import { BackButton } from '../GeneralStyles'

export default function BeneficiosPage() {
  const toggleBeneficiosPage = useStore((state) => state.toggleBeneficiosPage)
  const playToTopView = useStore((state) => state.playToTopView)
  const toggleMainMenuVisible = useStore((state) => state.toggleMainMenuVisible)
  const [videoLink, setVideoLink] = useState(null)
  const [isModalOpened, setModalOpened] = useState(false)
  const setMusicToPlay = useStore((state) => state.setMusicToPlay)
  const userStoppedMusic = useStore((state) => state.userStoppedMusic)

  function onBackButtonClick() {
    toggleBeneficiosPage()
    playToTopView()
    toggleMainMenuVisible()
  }

  useEffect(() => {
    if (userStoppedMusic) return
    setMusicToPlay(!isModalOpened)
  }, [isModalOpened])

  return (
    <>
      <ModalIFrame
        isOpened={isModalOpened}
        setOpened={setModalOpened}
        videoLink={videoLink}
      />
      <BackButton onClick={onBackButtonClick} />
      <Container>
        <MainView>
          <Logo src={beneficiosLogo} alt={'Benefícios Logo'} />
          <InfoBody>
            <p>{beneficiosMainPhrase}</p>
            <OptionsContainer>
              {bullets.map((bullet, i) => (
                <Option
                  key={`beneOption${i}`}
                  onClick={() => {
                    if (!bullet?.videoLink) return
                    setVideoLink(bullet?.videoLink)
                    setModalOpened(true)
                  }}
                >
                  <SlideButtons src={blueCircleButton} />
                  <p>{bullet.label}</p>
                </Option>
              ))}
            </OptionsContainer>
          </InfoBody>
        </MainView>
      </Container>
    </>
  )
}
