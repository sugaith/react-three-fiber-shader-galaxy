import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'

export function rgbObject2ThreeColor(rgbObject) {
  const rgbStr = `rgb(${rgbObject.r},${rgbObject.g},${rgbObject.b})`
  return new THREE.Color(rgbStr)
}

export function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

export function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

export function arr2Xyz(arrXyz, y, z) {
  if (arrXyz && y && z) {
    return { x: arrXyz, y, z }
  }

  if (typeof arrXyz === 'number') {
    return { x: arrXyz, y: arrXyz, z: arrXyz }
  }

  return {
    x: arrXyz[0],
    y: arrXyz[1],
    z: arrXyz[2],
  }
}

export const useStateWithCallback = (initialState) => {
  const [state, setState] = useState(initialState)
  const callbackRef = useRef(() => undefined)

  const setStateCB = (newState, callback) => {
    callbackRef.current = callback
    setState(newState)
  }

  useEffect(() => {
    callbackRef.current?.()
  }, [state])

  return [state, setStateCB]
}
