import React, { useEffect, useState } from 'react'
import { useStore } from '../../Store'
import FadeInOutView from '../components/FadeInOutView'
import tecnologiaLogo from './tecnologia-logo.png'
import blueCircleButton from '../../assets/icons/botao-principal-site.svg'
import { BackButton } from '../GeneralStyles'
import {
  Container,
  InfoRow,
  LogoSubPage,
  MainView,
  Option,
  OptionsContainer,
  SlideButtons,
  SubOption,
  SubPagesContainer,
} from './TecnologiaPageStyle'
import {
  tecnologiaPageData,
  tecnologiaMainPhrase,
  initialPageView,
  pageNames,
} from './TecnologiaPageData'
import { ModalIFrame } from '../ModalIFrame'

export default function TecnologiaPage() {
  const toggleTecnologiaPage = useStore((state) => state.toggleTecnologiaPage)
  const playToTopView = useStore((state) => state.playToTopView)
  const toggleMainMenuVisible = useStore((state) => state.toggleMainMenuVisible)

  const [videoLink, setVideoLink] = useState(null)
  const [isModalOpened, setModalOpened] = useState(false)
  const [pageViewState, setPageViewState] = useState(initialPageView)
  const setMusicToPlay = useStore((state) => state.setMusicToPlay)
  const userStoppedMusic = useStore((state) => state.userStoppedMusic)

  useEffect(() => {
    if (userStoppedMusic) return
    setMusicToPlay(!isModalOpened)
  }, [isModalOpened])

  function onBackButtonClick() {
    if (!pageViewState.main) {
      showView(pageNames.main)
      return
    }
    toggleTecnologiaPage()
    playToTopView()
    toggleMainMenuVisible()
  }

  function showView(viewName) {
    const newPageView = { ...initialPageView, main: false }
    newPageView[viewName] = true
    setPageViewState(newPageView)
  }

  return (
    <>
      <ModalIFrame
        isOpened={isModalOpened}
        setOpened={setModalOpened}
        videoLink={videoLink}
      />
      <BackButton onClick={onBackButtonClick} />
      <Container>
        <SubPagesContainer>
          <FadeInOutView toggleFade={pageViewState.main} position={'fixed'}>
            <MainView>
              <LogoSubPage>
                <img src={tecnologiaLogo} alt={'Tecnologia Logo'} />
                <p>{tecnologiaMainPhrase}</p>
              </LogoSubPage>
              <OptionsContainer>
                {tecnologiaPageData.map((optionData, i) => (
                  <Option
                    key={`techOption${i}`}
                    onClick={() => showView(optionData.name)}
                  >
                    <SlideButtons src={blueCircleButton} />
                    <p>{optionData.label}</p>
                  </Option>
                ))}
              </OptionsContainer>
            </MainView>
          </FadeInOutView>

          {tecnologiaPageData.map((option, i) => (
            <FadeInOutView
              key={`techSubPage${i}`}
              toggleFade={pageViewState[option.name]}
              position={'fixed'}
            >
              <MainView>
                <LogoSubPage>
                  <p>{option.label}</p>
                  <p>{option.text}</p>
                </LogoSubPage>
                <OptionsContainer>
                  {option?.bullets?.map((bullet, i) => (
                    <SubOption
                      onClick={() => {
                        if (!bullet?.videoLink) return
                        setVideoLink(bullet?.videoLink)
                        setModalOpened(true)
                      }}
                      key={`techSubOption${i}`}
                    >
                      <SlideButtons src={blueCircleButton} />
                      <InfoRow>
                        <p>{bullet.label}</p>
                        {bullet?.video && <p>(video)</p>}
                      </InfoRow>
                    </SubOption>
                  ))}
                </OptionsContainer>
              </MainView>
            </FadeInOutView>
          ))}
        </SubPagesContainer>
      </Container>
    </>
  )
}
