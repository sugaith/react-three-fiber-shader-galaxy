import React, { useEffect, useState } from 'react'
import { useStore } from '../../Store'
import FadeInOutView from '../components/FadeInOutView'
import academicosLogo from './logo-academicos.png'
import blueCircleButton from '../../assets/icons/botao-principal-site.svg'
import { BackButton } from '../GeneralStyles'
import { ModalIFrame } from '../ModalIFrame'
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
} from './AcademicosPageStyle'
import {
  academicosMainPhrase,
  academicosPageData,
  initialPageView,
  pageNames,
} from './AcademicosPageData'

export default function AcademicosPage() {
  const toggleAcademicosPage = useStore((state) => state.toggleAcademicosPage)
  const playToTopView = useStore((state) => state.playToTopView)
  const toggleMainMenuVisible = useStore((state) => state.toggleMainMenuVisible)
  const setMusicToPlay = useStore((state) => state.setMusicToPlay)
  const userStoppedMusic = useStore((state) => state.userStoppedMusic)

  const [pageViewState, setPageViewState] = useState(initialPageView)
  const [iFrame, setIFrame] = useState(null)
  const [videoLink, setVideoLink] = useState(null)
  const [isModalOpened, setModalOpened] = useState(false)

  useEffect(() => {
    if (userStoppedMusic) return
    setMusicToPlay(!isModalOpened)
  }, [isModalOpened])

  function onBackButtonClick() {
    if (!pageViewState.main) {
      showView(pageNames.main)
      return
    }
    toggleAcademicosPage()
    playToTopView()
    toggleMainMenuVisible()
  }

  function showView(viewName) {
    const newPageView = { ...initialPageView, main: false }
    newPageView[viewName] = true
    setPageViewState(newPageView)
  }

  const aTagProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  }
  return (
    <Container>
      <ModalIFrame
        isOpened={isModalOpened}
        setOpened={setModalOpened}
        iFrame={iFrame}
        videoLink={videoLink}
      />
      <BackButton onClick={onBackButtonClick} />
      <SubPagesContainer>
        <FadeInOutView toggleFade={pageViewState.main} position={'fixed'}>
          <MainView>
            <LogoSubPage>
              <img src={academicosLogo} alt={'Acadêmicos Logo'} />
              <p>{academicosMainPhrase}</p>
            </LogoSubPage>
            <OptionsContainer>
              {academicosPageData.map((optionData, i) => (
                <Option
                  key={`mainOption${i}`}
                  onClick={() => showView(optionData.name)}
                >
                  <SlideButtons src={blueCircleButton} />
                  <p>{optionData.label}</p>
                </Option>
              ))}
            </OptionsContainer>
          </MainView>
        </FadeInOutView>

        {academicosPageData.map((option, i) => (
          <FadeInOutView
            key={`option${i}`}
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
                    key={`subOption${i}`}
                    onClick={() => {
                      if (!bullet?.iframe && !bullet?.videoLink) return
                      setIFrame(bullet.iframe)
                      setVideoLink(bullet?.videoLink)
                      setModalOpened(true)
                    }}
                    shouldcenter={option?.bullets.length === 3}
                  >
                    <a {...aTagProps} href={bullet?.link}>
                      <SlideButtons src={blueCircleButton} />
                    </a>
                    <InfoRow>
                      <p>
                        <a {...aTagProps} href={bullet?.link}>
                          {bullet.label}
                        </a>
                      </p>
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
  )
}
