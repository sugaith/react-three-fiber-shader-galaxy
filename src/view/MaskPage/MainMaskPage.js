import { useFrame } from '@react-three/fiber'
import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useStore } from '../../Store'
import { animated, useSpring } from '@react-spring/web'

export default function MainMaskPage() {
  const isMainMenuVisible = useStore((state) => state.isMainMenuVisible)
  const mIsMainMenuVisible = React.useRef(isMainMenuVisible)
  const canShowMaskEffectOnMain = useStore(
    (state) => state.canShowMaskEffectOnMain,
  )
  const [canShowMask, setCanShowMask] = useState(false)

  const opacitySpring = useSpring({
    to: {
      opacity: canShowMask ? 1 : 0,
    },
    config: { duration: 300 },
  })

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      onMouseMove(e)
    })
  })

  useEffect(() => {
    setCanShowMask(canShowMaskEffectOnMain && mIsMainMenuVisible.current)
  }, [canShowMaskEffectOnMain])

  useEffect(() => {
    mIsMainMenuVisible.current = isMainMenuVisible
    setCanShowMask(canShowMaskEffectOnMain && mIsMainMenuVisible.current)
  }, [isMainMenuVisible])

  function onMouseMove(e) {
    var mask = document.getElementById('main-mask')
    var screenWidth = window.innerWidth
    var screenHeight = window.innerHeight
    var x = e.clientX
    var y = e.clientY
    var distanceX = x - screenWidth / 2
    var distanceY = y - screenHeight / 2
    if (mask != null) {
      mask.style.webkitMaskPosition = `${distanceX}px ${distanceY}px`
    }
  }

  return (
    <MaskDiv style={opacitySpring}>
      <Mask id={'main-mask'}>
        <BaseDiv></BaseDiv>
      </Mask>
    </MaskDiv>
  )
}

const BaseDiv = styled.div`
  background: #000000;
  height: 100%;
`
const Mask = styled.div`
  height: 100%;
  mask-image: radial-gradient(circle, #00000000 3%, rgb(0 0 0 / 77%) 11%);
`
const MaskDiv = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  z-index: ${Infinity};
`
