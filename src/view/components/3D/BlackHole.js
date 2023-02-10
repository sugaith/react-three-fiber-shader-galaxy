import React from 'react'
import { CubeCamera } from '@react-three/drei'

export default function BlackHole({ offset = 0, ...props }) {
  return (
    <CubeCamera {...props} far={1}>
      {(texture) => (
        <mesh>
          <sphereBufferGeometry args={[5, 64, 64]} />
          <meshStandardMaterial roughness={0} metalness={1} envMap={texture} />
        </mesh>
      )}
    </CubeCamera>
  )
}
