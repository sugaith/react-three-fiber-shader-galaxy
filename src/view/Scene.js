import React, { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { TransformControls } from '@react-three/drei'
import AsyncStorage from '@callstack/async-storage'
import Galaxy from './components/3D/Galaxy/Galaxy'
import Camera from './components/3D/Camera'
import GalaxyMenuPage from './MainPage/GalaxyMenuPage'
import { mainCameraPos } from '../utils/elementsPositions'
import BlackHole from './components/3D/BlackHole'
import { animated, useSpring } from '@react-spring/three'
import {
  galaxyConfigFields,
  useDepthOfFieldControls,
  useBloomControls,
} from '../utils/UIXControls'
import { useStore } from '../Store'
import Star from './components/3D/Star'
import Lights from './components/3D/Lights'
import {
  DepthOfField,
  EffectComposer,
  SelectiveBloom,
} from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize, BlendFunction } from 'postprocessing'

export default function Scene() {
  const setMainCameraRef = useStore((state) => state.setMainCameraRef)
  const dofControls = useDepthOfFieldControls()
  const bloomControls = useBloomControls()

  const sceneMesh = useRef()
  const lightRef = useRef()
  const starRef = useRef()
  const galaxyModelRef = useRef()
  const mainCamera = useRef()
  const levaControlsConfig = useRef({})
  const refTransformControls = useRef()

  const [isFetchDone, setIsFetchDone] = useState(false)

  useEffect(() => {
    setMainCameraRef(mainCamera.current)
    mainCamera.current.lookAt(...mainCameraPos.initialLookAt)

    const loadConfig = async () => {
      // this key must be changes in order to reset config
      const resetKey = 'ksdsdasdey'
      if ((await AsyncStorage.getItem(resetKey)) !== 'true') {
        console.log('clear config!')
        await AsyncStorage.clear()
        await AsyncStorage.setItem(resetKey, true)
      }

      AsyncStorage.getItem(galaxyConfigFields.galaxyColors).then(
        (galaxyColors) => {
          levaControlsConfig.current = {
            galaxyColors: JSON.parse(galaxyColors),
          }

          AsyncStorage.getItem(galaxyConfigFields.galaxySizes).then(
            (galaxySizes) => {
              levaControlsConfig.current = {
                ...levaControlsConfig.current,
                galaxySizes: JSON.parse(galaxySizes),
              }

              console.log('GALAXY CONFIG..............................')
              console.log(JSON.stringify(levaControlsConfig.current))

              setIsFetchDone(true)
            },
          )
        },
      )
    }
    loadConfig()
  }, [])

  const [rotateSceneXSignal, setRotateSceneXSignal] = useState(0)
  const [rotateSceneZSignal, setRotateSceneZSignal] = useState(0)

  useFrame((state) => {
    if (!isFetchDone) return

    const { mouse } = state
    // console.log('mouse.xy', mouse.x, mouse.y)

    //TODO merge bellow logic into getSceneRotationCondition() / ??send itt to App.js??
    const centerRadius = 0.18
    const isMouseCentered =
      mouse.x < centerRadius &&
      mouse.x > centerRadius * -1 &&
      mouse.y < centerRadius &&
      mouse.y > centerRadius * -1

    if (isMouseCentered) {
      setRotateSceneXSignal(0)
      setRotateSceneZSignal(0)
    } else {
      if (mouse.x > 0) {
        setRotateSceneXSignal(1)
      } else {
        setRotateSceneXSignal(-1)
      }
      if (mouse.y > 0) {
        setRotateSceneZSignal(1)
      } else {
        setRotateSceneZSignal(-1)
      }
    }
  })

  function getSceneRotationCondition() {
    const degree = Math.PI / 18
    const rotationX = rotateSceneXSignal && degree * rotateSceneXSignal
    const rotationZ = -1 * (rotateSceneZSignal && degree * rotateSceneZSignal)
    const rotationY =
      -1 * (rotateSceneXSignal && (Math.PI / 15) * rotateSceneXSignal)

    return [rotationX, rotationY, rotationZ]
  }

  const { sceneRotation } = useSpring({
    sceneRotation: getSceneRotationCondition(),
    config: {
      tension: 90,
      friction: 120,
      precision: 0.005,
    },
  })

  return (
    <>
      {/*<Camera*/}
      {/*  // makeDefault*/}
      {/*  reference={observerCamera}*/}
      {/*  position={mainCameraPos.initialPos}*/}
      {/*  fov={70}*/}
      {/*  far={20000}*/}
      {/*/>*/}
      {/*<Lights />*/}
      {/*<ambientLight ref={lightRef} intensity={0.6} color={'#1fa8f4'} />*/}
      <pointLight
        ref={lightRef}
        position={[1100, 6000, 0]}
        intensity={10.3}
        color={'#ffffff'}
      />

      {/*<Star ref={starRef} scale={60} color={'#ffffff'} />*/}

      <Camera
        makeDefault
        // helperOn
        reference={mainCamera}
        position={mainCameraPos.initialPos}
        // position={[cameraTopView.x, cameraTopView.y, cameraTopView.z]}
        fov={70}
        far={20000}
      >
        {/*<Page3D />*/}
      </Camera>

      {isFetchDone && (
        <>
          <EffectComposer>
            <DepthOfField
              focusDistance={dofControls.focusDistance} // where to focus 0
              focalLength={dofControls.focalLength} // focal length 0.02
              bokehScale={dofControls.bokehScale} // bokeh size 2
              width={dofControls.width}
              height={dofControls.height}
            />
            <SelectiveBloom
              // blurPass={BlurPass} // A blur pass.
              lights={[lightRef]} // ⚠️ REQUIRED! all relevant lights
              // selection={[starRef]} // selection of objects that will have bloom effect
              // selectionLayer={1} // selection layer
              intensity={bloomControls.intensity} // The bloom intensity.
              // width={Resizer.AUTO_SIZE} // render width
              // height={Resizer.AUTO_SIZE} // render height
              // kernelSize={KernelSize.LARGE} // blur kernel size
              luminanceThreshold={bloomControls.luminanceThreshold} // luminance threshold. Raise this value to mask out darker elements in the scene.
              luminanceSmoothing={bloomControls.luminanceSmoothing} // smoothness of the luminance threshold. Range is [0, 1]
            />
          </EffectComposer>

          <animated.mesh ref={sceneMesh} rotation={sceneRotation}>
            <Galaxy
              reference={galaxyModelRef}
              config={levaControlsConfig.current}
            />
            {/*<TransformControls*/}
            {/*  ref={refTransformControls}*/}
            {/*  position={[0, 0, 0]}*/}
            {/*  onMouseUp={() => {*/}
            {/*    console.log('Gizmo Position')*/}
            {/*    console.log(refTransformControls.current.gizmo.object.position)*/}
            {/*    console.log('Camera Position')*/}
            {/*    console.log(mainCamera.current.position)*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <BlackHole scale={1} />*/}
            {/*  /!*<Star scale={10} color={'#fff9f9'} />*!/*/}
            {/*</TransformControls>*/}
            {/*<BlackHole scale={36} position={[0, 100, 0]} />*/}

            <GalaxyMenuPage />
          </animated.mesh>
        </>
      )}
    </>
  )
}
