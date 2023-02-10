import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import fragmentShader from './shaders/fragment.frag'
import vertexShader from './shaders/vertex.vert'

export default function Bola({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/bola.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <lineSegments>
        <bufferGeometry attach="geometry" {...nodes.Icosahedron_1.geometry} />
        <shaderMaterial
          attach={'material'}
          args={[
            {
              vertexShader,
              fragmentShader,
            },
          ]}
        />
      </lineSegments>
    </group>
  )
}

useGLTF.preload('/bola.gltf')
