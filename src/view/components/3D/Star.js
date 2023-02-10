import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { animated } from '@react-spring/three'

export const Star = forwardRef((props, ref) => {
  React.useEffect(() => {
    // ref.current.layers.set(100)
  }, [])

  return (
    <animated.mesh ref={ref} {...props}>
      <sphereBufferGeometry args={[5, 30, 30]} />
      <meshPhongMaterial
        attach="material"
        color={props.color}
        // roughness={0.9}
        // alphaTest={0.19}
        // opacity={0.6}
        // transparent={true}
        // emissive={props.color}
        side={THREE.DoubleSide}
      />
      {props.light && (
        <pointLight position={[0, 0, 0]} intensity={6.3} color={props.color} />
      )}
      {props.children}
    </animated.mesh>
  )
  //
  // return (
  //   <pointLight {...props} distance={60} intensity={6} color={props.color}>
  //     <mesh scale={props.scale} color={props.color}>
  //       <sphereBufferGeometry args={[1, 30, 30]} color={props.color} />
  //       <meshPhongMaterial
  //         attach='material'
  //         color={props.color}
  //         roughness={0.5}
  //         alphaTest={0.19}
  //         opacity={0.51}
  //         transparent
  //         emissive={props.color}
  //         side={THREE.DoubleSide}
  //       />
  //     </mesh>
  //   </pointLight>
  // )
})

export default Star
