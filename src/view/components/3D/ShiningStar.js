import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { animated } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'

const clock = new THREE.Clock(false)

export default function ShiningStar({
  scale,
  position,
  isMouseOver,
  children,
}) {
  const shineStarRef = useRef()
  const shineStarRef0 = useRef()
  const shineStarRef1 = useRef()
  const shineStarRef2 = useRef()
  const shineStarRef3 = useRef()
  const shineStarRef4 = useRef()
  const starRef = useRef()

  useEffect(() => {
    setTimeout(() => clock.start(), Math.random() * 10 * 3000)
    starRef.current.rotation.x = 12.59568477
    starRef.current.rotation.z = 15.00985465
  }, [])

  useFrame(() => {
    //for big crosses
    shineStarRef.current.scale.x =
      1.2 + Math.sin(clock.getElapsedTime() * 240) / 8
    shineStarRef0.current.scale.z =
      1.2 + Math.sin(clock.getElapsedTime() * 240) / 8

    //for small croses
    shineStarRef1.current.scale.y =
      size1 + Math.sin(clock.getElapsedTime() * 150) / 8
    shineStarRef2.current.scale.y =
      size1 + Math.sin(clock.getElapsedTime() * 150) / 8
    shineStarRef3.current.scale.y =
      0.72 + Math.sin(clock.getElapsedTime() * 150) / 12
    shineStarRef4.current.scale.y =
      0.72 + Math.sin(clock.getElapsedTime() * 150) / 12

    // starRef.current.rotation.x += Math.PI / 1200
    // starRef.current.rotation.z += Math.PI / 1200
    // starRef.current.rotation.y += Math.PI / 1200

    // console.log('rotation -> ', [
    //   starRef.current.rotation.x,
    //   starRef.current.rotation.y,
    //   starRef.current.rotation.z,
    // ])
  })

  const size1 = 0.3
  const size2 = 0.03

  return (
    <animated.mesh
      position={position}
      scale={scale}
      rotation={[Math.PI * 0.5, 0, Math.PI * 1.3]}
      ref={starRef}
    >
      {/*ring*/}
      {isMouseOver && (
        <animated.mesh scale={10} rotation={[Math.PI / 2, 0, 0]}>
          <ringBufferGeometry args={[15, 16, 60, 8, 0.7, Math.PI * 2]} />
          <meshBasicMaterial side={THREE.DoubleSide} color={'#2055bb'} />
        </animated.mesh>
      )}

      {/*star*/}
      <mesh>
        {/*big cross*/}
        <mesh ref={shineStarRef} scale={[size1, size2, size2]}>
          <dodecahedronBufferGeometry args={[100, 0]} />
          <meshBasicMaterial color="white" />
        </mesh>
        <mesh ref={shineStarRef0} scale={[size2, size2, size1]}>
          <dodecahedronBufferGeometry args={[100, 0]} />
          <meshBasicMaterial color="white" />
        </mesh>

        {/*small cross 1*/}
        <mesh
          ref={shineStarRef1}
          scale={[size2, size1, size2]}
          rotation={[Math.PI / 4, 0, 0]}
        >
          <dodecahedronBufferGeometry args={[100, 0]} />
          <meshBasicMaterial color="white" />
        </mesh>
        <mesh
          ref={shineStarRef2}
          scale={[size2, size1, size2]}
          rotation={[-Math.PI / 4, 0, 0]}
        >
          <dodecahedronBufferGeometry args={[100, 0]} />
          <meshBasicMaterial color="white" />
        </mesh>

        {/*small cross 2*/}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <mesh
            ref={shineStarRef3}
            scale={[size2, size1, size2]}
            rotation={[Math.PI / 4, 0, 0]}
          >
            <dodecahedronBufferGeometry args={[100, 0]} />
            <meshBasicMaterial color="white" />
          </mesh>
          <mesh
            ref={shineStarRef4}
            scale={[size2, size1, size2]}
            rotation={[-Math.PI / 4, 0, 0]}
          >
            <dodecahedronBufferGeometry args={[100, 0]} />
            <meshBasicMaterial color="white" />
          </mesh>
        </mesh>
      </mesh>
      {children}
    </animated.mesh>
  )
}
