import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { animated, easings, useSpring } from '@react-spring/three'
import {
  rgbObject2ThreeColor,
  getRandomArbitrary,
} from '../../../../utils/Utils'
import vertexShader from './galaxyAlphaCircle2.vert'
import fragmentShader from './galaxyAlphaCircle2.frag'
import {
  useGalaxyColorControls,
  useGalaxySizeControls,
} from '../../../../utils/UIXControls'
import LightGalaxy from './LightGalaxy'
import { useControlsStore } from '../../../../ControlsStore'

export default function Galaxy({ config, reference }) {
  const galaxySize = useControlsStore((state) => state.galaxySize)
  const { galaxySizeSpring } = useSpring({
    galaxySizeSpring: galaxySize,
    config: {
      duration: 3600,
      easing: easings.easeOutCubic,
    },
  })

  return (
    <animated.mesh ref={reference} scale={galaxySizeSpring}>
      {/*<GalaxyModel config={config} position={[-110, -110, 110]} />*/}
      <LightGalaxy position={[0, 0, 0]} config={config} />
    </animated.mesh>
  )
}

function GalaxyModel({ config, position }) {
  const { nodes } = useGLTF('scene.gltf')
  const { gl } = useThree()
  const shaderMaterialRef = useRef()
  const galaxyColorControls = useGalaxyColorControls(config.galaxyColors)
  const { particleSize } = useGalaxySizeControls(config.galaxySizes)

  const pointsScale = useMemo(() => {
    const length = nodes.mesh_0.geometry.attributes.position.array.length / 3
    const scales = new Float32Array(length)
    for (const index in scales) {
      scales[index] = getRandomArbitrary(0.3, 1.2)
    }
    return scales
  }, [])

  useFrame(({ clock }) => {
    shaderMaterialRef.current.uniforms.uniTime.value = clock.elapsedTime
  })

  const uniforms = {
    uniSize: { value: particleSize * gl.getPixelRatio() },
    uniTime: { value: 0 },
    uniColor: {
      value: rgbObject2ThreeColor(galaxyColorControls.uniColor),
    },
    uniColor2: {
      value: rgbObject2ThreeColor(galaxyColorControls.uniColor2),
    },
    mixFactorUniColor1: { value: galaxyColorControls.mixFactorUniColor1 },
    mixFactorRadiusUniColor2: {
      value: galaxyColorControls.mixFactorRadiusUniColor2,
    },
    uniTransparency: { value: galaxyColorControls.transparency },
  }

  return (
    <animated.points
      position={position}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={(e) => e.stopPropagation()}
      onPointerOver={(e) => e.stopPropagation()}
    >
      <bufferGeometry attach="geometry" {...nodes.mesh_0.geometry}>
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

useGLTF.preload('scene.gltf')
