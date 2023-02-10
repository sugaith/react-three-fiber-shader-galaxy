import React, { useRef, useEffect } from 'react'
import { CameraHelper } from 'three'
import { PerspectiveCamera, useHelper } from '@react-three/drei'

export default function Camera(props) {
  const { reference, makeDefault, position, helperOn } = props
  useHelper(reference, helperOn && CameraHelper, 1, 'hotpink')

  return (
    <PerspectiveCamera
      ref={reference}
      position={position}
      makeDefault={makeDefault}
      {...props}
    >
      <meshBasicMaterial attach="material" />
      {props.children}
    </PerspectiveCamera>
  )
}

// export function TestCamHelper() {
//   // const [ref, camera] = useResource()
//   const ref = useRef()
//
//   return (
//     <>
//       <perspectiveCamera
//         ref={ref}
//         aspect={1200 / 600}
//         radius={(1200 + 600) / 4}
//         fov={45}
//         position={[0, 0, 2]}
//         onUpdate={self => self.updateProjectionMatrix()}
//       />
//       {/*{camera && <cameraHelper args={camera} />}*/}
//       {ref.current && <cameraHelper args={ref.current} />}
//     </>
//   )
// }
