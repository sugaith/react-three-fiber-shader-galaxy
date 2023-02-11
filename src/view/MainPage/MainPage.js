import React, { useEffect } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { useStore } from '../../Store'
import styled from 'styled-components'
import blueCircleButton from '../../assets/icons/botao-principal-site.svg'
import { useGalaxyColorControls } from '../../utils/UIXControls'

export default function MainPage(props) {
  const toggleInitialButton = useStore((state) => state.toggleInitialButton)
  const playToTopView = useStore((state) => state.playToTopView)
  const toggleMainMenuVisible = useStore((state) => state.toggleMainMenuVisible)
  const { setGalaxyColors } = useGalaxyColorControls()

  useEffect(
    () =>
      setGalaxyColors({
        transparency: 0.56,
      }),
    [],
  )

  const { x } = useSpring({
    loop: true,
    from: { x: 0 },
    x: 1,
    delay: 1500,
    config: { duration: 1500 },
  })

  function onEnterButtonClick() {
    toggleInitialButton()
    playToTopView()
    toggleMainMenuVisible()
  }

  return (
    <ContainerMiddle style={props.style}>
      <Section>
        <Slogan>
          <p>{'Bem Vindo ao nosso Portal Virtual'.toUpperCase()}</p>
          <p>
            {'Transformando vidas por meio da educação de qualidade.'.toUpperCase()}
          </p>
        </Slogan>
        <EnterButton onClick={onEnterButtonClick}>
          <p>{'Explore seu futuro'.toUpperCase()}</p>
          <EnterIcon
            style={{
              scale: x.to({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
              }),
            }}
          >
            <img src={blueCircleButton} />
          </EnterIcon>
        </EnterButton>
      </Section>
    </ContainerMiddle>
  )
}

const ContainerMiddle = styled(animated.div)`
  position: absolute;
  top: 63%;
  transform: translate(0%, -63%);

  z-index: 2;
  margin: 0 0 0 9%;
`
const Section = styled(animated.div)`
  display: flex;
  flex-direction: column;
`
const Slogan = styled(animated.h2)`
  letter-spacing: 1px;
  flex-wrap: wrap;
  p:nth-child(1) {
    font-family: 'BlissProExtraLight', sans-serif;
    letter-spacing: 3px;
    font-size: clamp(0.81rem, 3vh, 1rem);
    max-width: 450px;
    margin-bottom: 1rem;
  }
  p:nth-child(2) {
    font-family: 'BlissProHeavy', sans-serif;
    letter-spacing: -1px;
    font-size: clamp(1.5rem, 3.4vh + 1.4vw, 3rem);
    max-width: 450px;
  }
`
const EnterButton = styled(animated.button)`
  p {
    font-family: 'BlissProLight', sans-serif;
    font-size: clamp(0.81rem, 3vw, 1rem);
  }
  letter-spacing: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  border: 0;
  padding: 0;
  color: white;
  cursor: pointer;
  -webkit-filter: drop-shadow(0 0 1rem #ffffff);
`
const EnterIcon = styled(animated.div)`
  img {
    margin-left: 9px;
    height: clamp(4rem, 6vw + 1vh, 6rem);
  }
`
