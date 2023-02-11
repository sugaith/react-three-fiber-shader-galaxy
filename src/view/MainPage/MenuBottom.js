import React, { useState } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from '@react-spring/web'
import ImageTransistor from '../components/ImageTransistor'
import { bottomMenuIconsData } from './mainPageData'
import { useStore } from '../../Store'

export default function MenuBottom({ toggleMenu }) {
  const smallIconSize = 42
  const bigIconSize = 51
  const [iconSize, setIconSize] = useState(smallIconSize)
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
  const toggleNucleosPage = useStore((state) => state.toggleNucleosPage)
  const togglePolosPage = useStore((state) => state.togglePolosPage)
  const toggleCentrosPage = useStore((state) => state.toggleCentrosPage)
  const toggleAcademicosPage = useStore((state) => state.toggleAcademicosPage)
  const toggleBeneficiosPage = useStore((state) => state.toggleBeneficiosPage)
  const toggleHistoriasPage = useStore((state) => state.toggleHistoriasPage)
  const toggleTecnologiaPage = useStore((state) => state.toggleTecnologiaPage)

  const toggleMenuSpring = useSpring({
    to: {
      bottom: toggleMenu ? 0 : -100,
      opacity: toggleMenu ? 1 : 0,
    },
    config: { duration: 900 },
    onRest: () => {
      setIconSize(bigIconSize)
      setTimeout(() => setIconSize(smallIconSize), 300)
    },
  })

  function handleViewToggles(toggleFunction) {
    isNucleosPageVisible && toggleNucleosPage()
    isPolosPageVisible && togglePolosPage()
    isCentrosPageVisible && toggleCentrosPage()
    isAcademicosPageVisible && toggleAcademicosPage()
    isBeneficiosPageVisible && toggleBeneficiosPage()
    isHistoriasPageVisible && toggleHistoriasPage()
    isTecnologiaPageVisible && toggleTecnologiaPage()
    toggleFunction?.()
  }

  function render() {
    return (
      <Container
        onMouseOver={() => setIconSize(bigIconSize)}
        onMouseOut={() => setIconSize(smallIconSize)}
        style={toggleMenuSpring}
      >
        <MenuItem
          isActive={isCentrosPageVisible}
          onClick={() => handleViewToggles(toggleCentrosPage)}
          src={bottomMenuIconsData.centrosIcons}
          width={iconSize}
        />
      </Container>
    )
  }

  return render()
}

function MenuItem({ onClick, src, width, isActive }) {
  const [isMouseOver, setIsMouseOver] = useState(false)

  function render() {
    return (
      <MenuItemContainer
        onClick={onClick}
        $isMouseOver={isMouseOver || isActive}
        size={width}
      >
        <Icon>
          <ImageTransistor
            toggle={isMouseOver || isActive}
            imageSources={src}
            width={isMouseOver || isActive ? width + 15 : width}
            transitionTime={150}
          />
        </Icon>
        <HoverArea
          onMouseOver={() => setIsMouseOver(true)}
          onMouseOut={() => setIsMouseOver(false)}
        />
      </MenuItemContainer>
    )
  }

  return render()
}

const Container = styled(animated.div)`
  //background-color: gray;
  position: fixed;
  display: flex;
  width: 100%;
  min-height: 72px;
  bottom: 0;
  justify-content: center;
  align-items: flex-end;
`
const MenuItemContainer = styled(animated.div)`
  top: ${({ $isMouseOver }) => ($isMouseOver ? -15 : 0)}px;
  display: flex;
  position: relative;
  width: ${({ size }) => size + 6}px;
  height: ${({ size }) => size + 6}px;
  padding: 3px;
  border-radius: 90px;
  align-items: center;
  justify-content: center;
  -webkit-filter: drop-shadow(0px 0px 4px rgb(10, 78, 255, 0.8));
  -webkit-transition: all 0.42s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  :hover {
    cursor: pointer;
    -webkit-filter: drop-shadow(0 0 0.5px #fff);
`

const Icon = styled(animated.div)`
  //background-color: aqua;
  width: 10%;
  height: 90%;
  border-radius: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const HoverArea = styled(animated.div)`
  //background-color: green;
  width: 110%;
  height: 110%;
  position: absolute;
  border-radius: 90px;
  opacity: 0.5;
  cursor: pointer;
`
