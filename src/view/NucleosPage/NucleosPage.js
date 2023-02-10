import React, { createRef, useEffect, useState } from 'react'
import { useControlsStore } from '../../ControlsStore'
import { useStore } from '../../Store'
import FadeInOutView from '../components/FadeInOutView'
import { BackButton } from '../GeneralStyles'
import { initialPageView, pageName, subPagesData } from './nucleosPageData'
import { Container, MainView, SubPageBody } from './NucleosPageStyle'

export default function NucleosPage() {
  const toggleNucleosPage = useStore((state) => state.toggleNucleosPage)
  const playToTopView = useStore((state) => state.playToTopView)
  const toggleMainMenuVisible = useStore((state) => state.toggleMainMenuVisible)
  const transitionToState1 = useControlsStore(
    (state) => state.transitionToState1,
  )

  const [pageViewState, setPageViewState] = useState(initialPageView)

  function onBackButtonClick() {
    transitionToState1()
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
  const setCurrentDiv = useStore((state) => state.setCurrentDiv)
  var nucleosDiv = createRef()
  const isNucleosPageVisible = useStore((state) => state.isNucleosPageVisible)

  useEffect(() => {
    if (pageViewState.main) {
      setCurrentDiv(nucleosDiv.current)
    }
  }, [isNucleosPageVisible])

  function render() {
    return (
      <>
        <MainView ref={nucleosDiv}>
          <SubPageBody>
            <div className={name === pageName.main ? '' : 'row'}>{textDOM}</div>
          </SubPageBody>
        </MainView>
      </>
    )
  }

  return render()
}
