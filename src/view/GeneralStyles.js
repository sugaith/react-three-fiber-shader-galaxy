import React from 'react'
import { animated } from '@react-spring/web'
import styled from 'styled-components'
import blueCircleButton from '../assets/icons/botao-principal-site.svg'
import { useMediaQuery } from '@react-hook/media-query'

export function BackButton({ onClick }) {
  const vwMatches = useMediaQuery('(max-width: 792px)')
  return (
    <BackButtonContainer onClick={onClick}>
      <SlideButtonsLeft src={blueCircleButton} />
      {!vwMatches && <p>VOLTAR</p>}
    </BackButtonContainer>
  )
}

export const BackButtonContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 9%;
  display: flex;
  align-items: center;
  flex-direction: row;
  color: white;
  cursor: pointer;
  z-index: 15;
  img {
    height: 42px;
    margin-right: 6px;
  }
  P {
    font-size: 0.72rem;
    letter-spacing: 3px;
  }
  @media (max-width: 792px), (max-height: 510px) {
    top: 3%;
    left: 3%;
  }
`
export const SlideButtons = styled(animated.img)`
  z-index: 3;
  cursor: pointer;
  padding: 0.3rem;
  height: 36px;
`
export const SlideButtonsLeft = styled(animated.img)`
  transform: rotateZ(180deg);
  height: 36px;
`
