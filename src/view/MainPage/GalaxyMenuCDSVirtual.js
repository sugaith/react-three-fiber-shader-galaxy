import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from '@react-spring/web'
import { useStore } from '../../Store'
import { Html } from '@react-three/drei'
import Star from '../components/3D/Star'
import ImageTransistor from '../components/ImageTransistor'
import { galaxyMenuIconsData as iconGroups } from './mainPageData'
import { useMediaQuery } from '@react-hook/media-query'
import { useControlsStore } from '../../ControlsStore'

export default function GalaxyMenuCDSVirtual() {
  const isMainMenuVisible = useStore((state) => state.isMainMenuVisible)
  const toggleMainMenuVisible = useStore((state) => state.toggleMainMenuVisible)
  const [isMainMenuMounted, setIsMainMenuMounted] = useState(isMainMenuVisible)

  const playNucleosPath = useStore((state) => state.playNucleosPath)
  const toggleNucleosPage = useStore((state) => state.toggleNucleosPage)

  const transitionToState2 = useControlsStore(
    (state) => state.transitionToState2,
  )

  const menuSpring = useSpring({
    to: {
      opacity: isMainMenuVisible ? 1 : 0,
    },
    config: { duration: 900 },
    onRest: () => {
      if (!isMainMenuVisible) {
        setIsMainMenuMounted(false)
      }
    },
  })

  useEffect(() => {
    isMainMenuVisible && setIsMainMenuMounted(true)
  }, [isMainMenuVisible])

  function onMenuNucleosClick() {
    playNucleosPath(() => {
      toggleNucleosPage()
    })
    toggleMainMenuVisible()
  }

  const vwMatches = useMediaQuery('(max-width: 500px)')

  const makeResponsivePos = (defaultPos, offset) => {
    const changeSpring = (match) => {
      if (match) {
        defaultPos[2] += offset
        return defaultPos
      }
      return defaultPos
    }
    const { responsivePos } = useSpring({
      responsivePos: changeSpring(vwMatches),
      config: {
        mass: 1,
        tension: 90,
        friction: 90,
        clamp: false,
        precision: 0.01,
      },
    })
    return responsivePos
  }

  const y_position = 500
  const z_position = 1500
  const menuItems = [
    {
      position: makeResponsivePos([-400, y_position, z_position - 300], -360),
      text: 'jwst'.toUpperCase(),
      logoSrc: iconGroups.centrosIcons,
      onClick: onMenuNucleosClick,
    },
  ]

  if (!isMainMenuMounted) return null

  return (
    <mesh position={[500, 0, 0]}>
      {menuItems.map((menuItem) => (
        <MenuItem
          disabled={!isMainMenuVisible}
          id={menuItem.text}
          position={menuItem.position}
          text={menuItem.text}
          logoSrc={menuItem.logoSrc}
          startSize={1}
          starColor={'#0eee55'}
          style={menuSpring}
          onClick={() => {
            menuItem.onClick?.()
            transitionToState2()
          }}
        />
      ))}
    </mesh>
  )
}

function MenuItem({
  disabled,
  text,
  logoSrc,
  startSize,
  starColor,
  position,
  onClick,
  style,
}) {
  const [isMouseOver, setIsMouseOver] = useState(false)
  const vhMatches = useMediaQuery('(max-height: 450px)')
  const setCanShowMaskEffectOnMain = useStore(
    (state) => state.setCanShowMaskEffectOnMain,
  )
  useEffect(() => {
    setCanShowMaskEffectOnMain(isMouseOver)
  }, [isMouseOver])

  function render() {
    return (
      <Star scale={startSize} position={position} color={starColor}>
        <Html center distanceFactor={vhMatches ? 3600 : 5100}>
          <MenuTextLogo
            disabled={disabled}
            onClick={!disabled && onClick}
            isMouseOver={isMouseOver}
            onMouseOver={() => setIsMouseOver(true)}
            onMouseOut={() => setIsMouseOver(false)}
            style={style}
          >
            <ImageTransistor
              disabled={disabled}
              toggle={isMouseOver}
              imageSources={logoSrc}
              width={isMouseOver ? 80 : 70}
              transitionTime={150}
            />
            <p>{text}</p>
          </MenuTextLogo>
        </Html>
      </Star>
    )
  }
  return render()
}

const MenuTextLogo = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'cursor' : 'pointer')};
  height: 100px;
  p {
    font-family: 'BlissProExtraLight', sans-serif;
    letter-spacing: 2px;
    font-weight: 600;
    margin: 80px 0 0 0;
    padding: 0;
    color: ${({ isMouseOver }) => (isMouseOver ? '#ffffff' : '#ddecff')};
    opacity: ${({ isMouseOver }) => (isMouseOver ? 1 : 0.9)};
    font-size: 15px;
    text-align: center;
    -webkit-filter: drop-shadow(
      0 0 1rem ${({ isMouseOver }) => (isMouseOver ? '#ffffff' : '#bcdeff')}
    );
    -webkit-transition: all 0.42s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
`
