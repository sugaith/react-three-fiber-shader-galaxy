import React, { useEffect, useState } from 'react'
import { animated } from '@react-spring/web'
import styled from 'styled-components'
import blueCircleButton from '../assets/icons/botao-principal-site.svg'
import { useMediaQuery } from '@react-hook/media-query'
import { useStore } from '@react-three/fiber'

export function BackButton({ onClick }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  const vwMatches = useMediaQuery('(max-width: 792px)')
  return (
    <>
      {show ? (
        <BackButtonContainer onClick={onClick}>
          <SlideButtonsLeft src={blueCircleButton} />
          {!vwMatches && <p>VOLTAR</p>}
        </BackButtonContainer>
      ) : null}
    </>
  )
}

export const BackButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 1%;
  display: flex;
  align-items: center;
  flex-direction: row;
  color: white;
  cursor: pointer;
  z-index: 9999;
  transition: 0.5s all ease-in-out;
  &:hover {
    transform: scale(1.2);
    -webkit-filter: drop-shadow(0 0 1rem #ffffff);
    transition: transform 0.5s ease;
  }
  img {
    height: 42px;
    margin-right: 6px;
  }
  P {
    font-size: 0.72rem;
    letter-spacing: 3px;
    &:hover {
      -webkit-filter: drop-shadow(0 0 1rem #ffffff);
    }
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
