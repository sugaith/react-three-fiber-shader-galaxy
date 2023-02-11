import React, { useRef, useState } from 'react'
import niac from '../../assets/images/logos/niac.png'
import neti from '../../assets/images/logos/neti.png'
import nubem from '../../assets/images/logos/nubem.png'
import pip from '../../assets/images/logos/pip.png'
import nupex from '../../assets/images/logos/nupex.png'
import nucleo_int from '../../assets/images/logos/nucleo_internacional.png'
import blueCircleButton from '../../assets/icons/botao-principal-site.svg'
import FadeInOutView from '../components/FadeInOutView'
import ImageGlower from '../components/ImageGlower'
import {
  subPagesData,
  pageName,
  initialPageView,
  subPageSlidesData,
} from './nucleosPageData'
import {
  Container,
  MainView,
  SubPageBody,
  LogoSubPage,
  LogosContainer,
  Logo,
  SlidesContainer,
  SlideView,
  SubPagesSlidesContainer,
} from './NucleosPageStyle'
import { useStore } from '../../Store'
import { SlideButtons, SlideButtonsLeft, BackButton } from '../GeneralStyles'

export default function NucleosPage() {
  const toggleNucleosPage = useStore((state) => state.toggleNucleosPage)
  const playToTopView = useStore((state) => state.playToTopView)
  const toggleMainMenuVisible = useStore((state) => state.toggleMainMenuVisible)

  const [pageViewState, setPageViewState] = useState(initialPageView)

  function onBackButtonClick() {
    toggleNucleosPage()
    playToTopView()
    toggleMainMenuVisible()
  }

  function showView(viewName) {
    const newPageView = { ...initialPageView, main: false }
    newPageView[viewName] = true
    setPageViewState(newPageView)
  }

  return (
    <Container>
      <BackButton
        onClick={() =>
          pageViewState[pageName.main]
            ? onBackButtonClick()
            : showView(pageName.main)
        }
      />
      {Object.values(subPagesData).map((page, i) => (
        <FadeInOutView
          key={`nucleoPage${i}`}
          position={'fixed'}
          toggleFade={pageViewState[page.name]}
        >
          <SubPage
            name={page.name}
            pageViewState={pageViewState}
            logoDOM={page.logoDOM}
            textDOM={page.textDOM}
            onShowView={showView}
            onBackButtonClick={onBackButtonClick}
          />
        </FadeInOutView>
      ))}
    </Container>
  )
}

function SubPage({ name, logoDOM, textDOM, onShowView, pageViewState }) {
  function render() {
    return (
      <>
        <MainView>
          <SubPageBody>
            <LogoSubPage>{logoDOM}</LogoSubPage>

            {textDOM}

            <SubPageSlides name={name} />

            {name === pageName.main && (
              //todo put this in an array
              <LogosContainer>
                <Logo active={pageViewState[pageName.neti] + ''}>
                  <ImageGlower
                    src={neti}
                    onClick={() => onShowView(pageName.neti)}
                  />
                </Logo>
                <Logo active={pageViewState[pageName.niac] + ''}>
                  <ImageGlower
                    src={niac}
                    onClick={() => onShowView(pageName.niac)}
                  />
                </Logo>
                <Logo active={pageViewState[pageName.nubem] + ''}>
                  <ImageGlower
                    src={nubem}
                    onClick={() => onShowView(pageName.nubem)}
                  />
                </Logo>
                <Logo active={pageViewState[pageName.nupex] + ''}>
                  <ImageGlower
                    src={nupex}
                    onClick={() => onShowView(pageName.nupex)}
                  />
                </Logo>
                <Logo active={pageViewState[pageName.pip] + ''}>
                  <ImageGlower
                    src={pip}
                    onClick={() => onShowView(pageName.pip)}
                  />
                </Logo>
                <Logo active={pageViewState[pageName.nucleo] + ''}>
                  <ImageGlower
                    src={nucleo_int}
                    onClick={() => onShowView(pageName.nucleo)}
                  />
                </Logo>
              </LogosContainer>
            )}
          </SubPageBody>
        </MainView>
      </>
    )
  }

  return render()
}

function SubPageSlides({ name }) {
  const [visibleSlides, setVisibleSlides] = useState({ 0: true })
  const currentSlideIndex = useRef(0)

  if (!subPageSlidesData?.[name] && !subPageSlidesData?.[name]?.length)
    return null

  const slidesLength = subPageSlidesData[name].length

  function showSlide(slideIndex) {
    if (slideIndex >= slidesLength) slideIndex = 0
    if (slideIndex < 0) slideIndex = slidesLength - 1

    const newVisibleSlides = {}
    newVisibleSlides[slideIndex] = true
    setVisibleSlides(newVisibleSlides)
    currentSlideIndex.current = Number(slideIndex)
  }

  return (
    <SubPagesSlidesContainer plural={slidesLength > 1}>
      {slidesLength > 1 && (
        <SlideButtonsLeft
          src={blueCircleButton}
          onClick={() => showSlide(currentSlideIndex.current - 1)}
        />
      )}
      <SlidesContainer>
        {subPageSlidesData[name].map((slide, index) => (
          <FadeInOutView
            key={`nucleoSlide${index}`}
            toggleFade={visibleSlides[index]}
            position={'fixed'}
          >
            <SlideView>
              {slide.topText}
              {slide.image}
            </SlideView>
          </FadeInOutView>
        ))}
      </SlidesContainer>
      {slidesLength > 1 && (
        <SlideButtons
          src={blueCircleButton}
          onClick={() => showSlide(currentSlideIndex.current + 1)}
        />
      )}
    </SubPagesSlidesContainer>
  )
}
