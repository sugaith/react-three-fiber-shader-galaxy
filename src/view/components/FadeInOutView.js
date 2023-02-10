import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from '@react-spring/web'

export default function FadeInOutView({
  children,
  toggleFade,
  position,
  duration,
  onFinishFading,
}) {
  const fadeDuration = duration || 720
  const Container = position === 'fixed' ? FixedContainer : VoidContainer

  const [showView, setShowView] = useState(toggleFade)

  const fadeInOutSpring = useSpring({
    to: {
      opacity: toggleFade ? 1 : 0,
    },
    config: { duration: fadeDuration },
    onRest: () => {
      onFinishFading?.()
      onSpringEnd()
    },
    onStart: () => setShowView(true),
  })

  useEffect(() => {
    if (toggleFade) setTimeout(() => setShowView(true), fadeDuration * 0.3)
  }, [toggleFade])

  function onSpringEnd() {
    if (!toggleFade) setShowView(false)
  }

  function render() {
    if (!showView) return null

    return <Container style={fadeInOutSpring}>{children}</Container>
  }

  return render()
}

const VoidContainer = styled(animated.div)``
const FixedContainer = styled(animated.div)`
  position: absolute;
  opacity: 0;
`
