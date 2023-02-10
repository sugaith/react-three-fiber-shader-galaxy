import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from '@react-spring/web'
import { useStore } from '../../Store'
import { Html } from '@react-three/drei'
import { landingPageIcons as iconGroups } from './mainPageData'
import ShiningStar from '../components/3D/ShiningStar'
import { useControlsStore } from '../../ControlsStore'

export default function GalaxyMenu() {
  const isFirsMenuVisible = useStore((state) => state.isFirsMenuVisible)
  const [isMounted, setIsMounted] = useState(isFirsMenuVisible)
  const toggleMainMenuVisible = useStore((state) => state.toggleMainMenuVisible)
  const toggleInitialButton = useStore((state) => state.toggleInitialButton)
  const toggleFirstMenuVisible = useStore(
    (state) => state.toggleFirstMenuVisible,
  )
  const playToTopView = useStore((state) => state.playToTopView)

  const transitionToState1 = useControlsStore(
    (state) => state.transitionToState1,
  )

  const menuSpring = useSpring({
    to: {
      opacity: isFirsMenuVisible ? 1 : 0,
    },
    config: { duration: 900 },
    onRest: () => {
      if (!isFirsMenuVisible) {
        setIsMounted(false)
      }
    },
  })

  useEffect(() => {
    isFirsMenuVisible && setIsMounted(true)
  }, [isFirsMenuVisible])

  const menuItems = [
    {
      position: [1140.93124690036, 1719.560759746348, 2394.937030380768],
      text: 'sadasd',
      logoSrc: null,
      onClick: () => {
        transitionToState1()
        toggleFirstMenuVisible()
        toggleInitialButton()
        playToTopView()
        toggleMainMenuVisible()
      },
    },
    {
      position: [2059.3310653352917, 102.06401328961471, 451.8951811524869],
      text: 'cesuca',
      logoSrc: null,
      onClick: () => {},
    },
    {
      position: [1457.1859862304118, 41.744375496595126, -592.8497567185583],
      text: 'udf',
      logoSrc: null,
      onClick: () => {},
    },
    {
      position: [-949.6390808108556, 616.39280237165394, 89.35505208558152],
      text: 'fds',
      logoSrc: null,
      onClick: () => {},
    },
  ]

  if (!isMounted) return null

  return (
    <mesh position={[0, 0, 0]}>
      {menuItems.map((menuItem, i) => (
        <MenuItem
          key={menuItem.text}
          index={i}
          position={menuItem.position}
          logoSrc={menuItem.logoSrc}
          onClick={menuItem.onClick}
          isVisible={isFirsMenuVisible}
          menuSpring={menuSpring}
        />
      ))}
    </mesh>
  )
}

function MenuItem({
  index,
  logoSrc,
  position,
  onClick,
  isVisible,
  menuSpring,
}) {
  const [isMouseOver, setIsMouseOver] = useState(false)

  const setCanShowMaskEffectOnFirst = useStore(
    (state) => state.setCanShowMaskEffectOnFirst,
  )

  const opacitySpring = useSpring({
    to: {
      opacity: isMouseOver ? 1 : 0,
    },
    config: { duration: 600 },
  })

  const starSize = index === 0 ? 2.7 : 1.5

  const { scale } = useSpring({
    scale: isVisible ? starSize : 0,
    config: { duration: 900 },
  })

  useEffect(() => {
    setCanShowMaskEffectOnFirst(isMouseOver)
  }, [isMouseOver])

  function render() {
    return (
      <ShiningStar scale={scale} position={position} isMouseOver={isMouseOver}>
        <Html center distanceFactor={4500}>
          <LogoContainer
            onMouseOver={() => setIsMouseOver(true)}
            onMouseOut={() => setIsMouseOver(false)}
            onMouseDown={onClick}
            style={menuSpring}
          >
            <animated.img
              src={
                index === 0
                  ? iconGroups.estrelaPrincipal
                  : iconGroups.estrelaSecundaria
              }
              style={{ height: index === 0 ? '120px' : '90px' }}
            />
          </LogoContainer>
        </Html>
        <Html center>
          <LogoContainer
            onMouseOver={() => setIsMouseOver(true)}
            onMouseOut={() => setIsMouseOver(false)}
            onMouseDown={onClick}
            style={{
              height:
                index === 0
                  ? '320px'
                  : index === 2
                  ? '240px'
                  : index === 7 || index === 8
                  ? '185px'
                  : '200px',
            }}
          >
            <div style={{ marginBottom: '10px' }}>
              <animated.img src={logoSrc} style={opacitySpring} />
            </div>
          </LogoContainer>
        </Html>
      </ShiningStar>
    )
  }
  return render()
}

const LogoContainer = styled(animated.div)`
  p {
    color: #ae0dd2;
  }
  :hover {
    cursor: pointer;
  }
`
