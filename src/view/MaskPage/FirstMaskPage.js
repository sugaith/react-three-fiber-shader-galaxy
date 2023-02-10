import { useFrame } from '@react-three/fiber'
import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useStore } from '../../Store'
import { animated, useSpring } from '@react-spring/web'

export default function FirstMaskPage() {
  const isFirsMenuVisible = useStore((state) => state.isFirsMenuVisible)
  const canShowMaskEffectOnFirst = useStore(
    (state) => state.canShowMaskEffectOnFirst,
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
    setCanShowMask(canShowMaskEffectOnFirst)
  }, [canShowMaskEffectOnFirst])

  useEffect(() => {
    if (!isFirsMenuVisible) {
      setCanShowMask(false)
      var mask = document.getElementById('first-mask')
      mask.style.opacity = '0'
    } else {
      var mask = document.getElementById('first-mask')
      mask.style.opacity = '1'
    }
  }, [isFirsMenuVisible])

  function onMouseMove(e) {
    var mask = document.getElementById('first-mask')
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
      <Mask id={'first-mask'}>
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
