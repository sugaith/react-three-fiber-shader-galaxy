import React from 'react'
import { useStore } from '../../Store'
import { Container } from './CentrosPageStyle'
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

  return (
    <>
      <BackButton onClick={onBackButtonClick} />
      <Container>
        <p>James Webb Space Telescope</p>
      </Container>
    </>
  )
}
