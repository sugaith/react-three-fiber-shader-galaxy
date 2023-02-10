import React from 'react'
import styled from 'styled-components'
import { animated } from '@react-spring/web'

export default function ImageGlower({ src, width, onClick }) {
  function render() {
    return <Container src={src} width={width} onClick={onClick} />
  }

  return render()
}

const Container = styled(animated.img)`
  -webkit-filter: drop-shadow(0px 0px 4px rgb(10, 78, 255, 0.8));
  -webkit-transition: all 0.42s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;

  :hover {
    cursor: pointer;
    -webkit-filter: drop-shadow(0 0 1rem #fff);
  }
`
