import * as THREE from 'three'
import React, { useRef, useMemo, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useControls, folder } from 'leva'
import { animated } from '@react-spring/three'
import {
  getRandomArbitrary,
  rgbObject2ThreeColor,
} from '../../../../utils/Utils'
import vertexShader from './galaxyAlphaCircle2.vert'
import fragmentShader from './galaxyAlphaCircle2.frag'
import { useControlsStore } from '../../../../ControlsStore'

export default function LightGalaxy({ position, config }) {
  const { gl } = useThree()
  const shaderMaterialRef = useRef()

  const particleSize = useControlsStore((state) => state.particleSize)
  const transparency = useControlsStore((state) => state.transparency)
  const uniColor = useControlsStore((state) => state.uniColor)
  const uniColor2 = useControlsStore((state) => state.uniColor2)
  const mixColorFactor1 = useControlsStore((state) => state.mixColorFactor1)
  const mixColorFactor2 = useControlsStore((state) => state.mixColorFactor2)

  useFrame(({ clock }) => {
    shaderMaterialRef.current.uniforms.uniTime.value = clock.elapsedTime
  })

  const uniforms = {
    uniTime: { value: 0 },
    uniSize: { value: particleSize * gl.getPixelRatio() },
    uniTransparency: { value: transparency },
    uniColor: { value: rgbObject2ThreeColor(uniColor) },
    uniColor2: { value: rgbObject2ThreeColor(uniColor2) },
    mixFactorUniColor1: { value: mixColorFactor1 },
    mixFactorRadiusUniColor2: { value: mixColorFactor2 },
  }

  const parameters = useControls({
    Galaxy: folder({
      count: { min: 100, max: 30000, value: 63000, step: 100 },
      radius: { min: 1, max: 2000, value: 140, step: 0.01 },
      branches: { min: 1, max: 300, value: 300, step: 1 },
      spin: { min: -3, max: 3, value: -0.84, step: 0.001 },
      randomness: { min: 0, max: 2, value: 1.62, step: 0.001 },
      randomnessPower: { min: 1, max: 10, value: 3.77, step: 0.001 },
    }),
  })

  const pointsScale = useMemo(() => {
    const length = parameters.count / 3
    const scales = new Float32Array(length)
    for (const index in scales) {
      scales[index] = getRandomArbitrary(0.3, 1.2)
    }
    return scales
  }, [])

  const particles = useRef()

  useEffect(() => {
    generateGalaxy()
  }, [])

  const generateGalaxy = () => {
    const positions = new Float32Array(parameters.count * 3)
    const colors = new Float32Array(parameters.count * 3)
    const colorInside = new THREE.Color(1.0, 0.3765, 0.1882)
    const colorOutside = new THREE.Color(0.10588, 0.22353, 0.51765)

    for (let i = 0; i < parameters.count; i++) {
      const i3 = i * 3

      const radius = Math.random() * parameters.radius
      const spinAngle = radius * parameters.spin
      const branchAngle =
        ((i % parameters.branches) / parameters.branches) * Math.PI * 2

      const randomX =
        Math.pow(Math.random(), parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        parameters.randomness *
        radius
      const randomY =
        Math.pow(Math.random(), parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        parameters.randomness *
        radius
      const randomZ =
        Math.pow(Math.random(), parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        parameters.randomness *
        radius

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX
      positions[i3 + 1] = randomY
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

      const mixedColor = colorInside.clone()
      mixedColor.lerp(colorOutside, radius / parameters.radius)

      colors[i3] = mixedColor.r
      colors[i3 + 1] = mixedColor.g
      colors[i3 + 2] = mixedColor.b
    }

    particles.current.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3),
    )
    particles.current.geometry.setAttribute(
      'color',
      new THREE.BufferAttribute(colors, 3),
    )
  }

  return (
    <animated.points ref={particles} position={position}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'attrScale']}
          array={pointsScale}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={shaderMaterialRef}
        attach={'material'}
        args={[
          {
            uniforms,
            vertexShader,
            fragmentShader,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            vertexColors: true,
          },
        ]}
      />
    </animated.points>
  )
}
