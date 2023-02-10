import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import AsyncStorage from '@callstack/async-storage'
import Galaxy from './components/3D/Galaxy/Galaxy'
import Camera from './components/3D/Camera'
import GalaxyMenuCDSVirtual from './MainPage/GalaxyMenuCDSVirtual'
import GalaxyMenu from './MainPage/GalaxyMenu'
import { mainCameraPos } from '../utils/elementsPositions'
import { animated, useSpring } from '@react-spring/three'
import {
  galaxyConfigFields,
  useDepthOfFieldControls,
  useBloomControls,
} from '../utils/UIXControls'
import { useStore } from '../Store'
import {
  DepthOfField,
  EffectComposer,
  SelectiveBloom,
} from '@react-three/postprocessing'
import nx from '../assets/images/milkyway_02/dark-s_nx.jpg'
import ny from '../assets/images/milkyway_02/dark-s_ny.jpg'
import nz from '../assets/images/milkyway_02/dark-s_nz.jpg'
import px from '../assets/images/milkyway_02/dark-s_px.jpg'
import py from '../assets/images/milkyway_02/dark-s_py.jpg'
import pz from '../assets/images/milkyway_02/dark-s_pz.jpg'
const textureCube = new THREE.CubeTextureLoader().load([px, nx, py, ny, pz, nz])
textureCube.format = THREE.RGBFormat
textureCube.encoding = THREE.sRGBEncoding

export default function Scene() {
  const setMainCameraRef = useStore((state) => state.setMainCameraRef)
  const dofControls = useDepthOfFieldControls()
  const bloomControls = useBloomControls()

  const sceneMesh = useRef()
  const lightRef = useRef()
  const galaxyModelRef = useRef()
  const mainCamera = useRef()
  const groupCamera = useRef()
  const levaControlsConfig = useRef({})
  const refTransformControls = useRef()
  const currentDiv = useStore((state) => state.currentDiv)
  const isMainMenuVisible = useStore((state) => state.isMainMenuVisible)
  const isFirsMenuVisible = useStore((state) => state.isFirsMenuVisible)
  const [focusDiv, _setFocusDiv] = useState(null)
  const [isTiltEventSet, _setIsTiltEventSet] = useState(true)
  const [defaultCameraPos, _setDefaultCameraPos] = useState({
    x: 0,
    y: 0,
    z: 0,
  })
  const mIsTitleEventSet = React.useRef(isTiltEventSet)
  const mDefaultCameraPos = React.useRef(defaultCameraPos)
  const mCurrentDiv = React.useRef(focusDiv)
  const mIsMainMenuVisible = React.useRef(isMainMenuVisible)

  const { scene } = useThree()

  const [isFetchDone, setIsFetchDone] = useState(false)

  const setIsTiltEventSet = (data) => {
    mIsTitleEventSet.current = data
    _setIsTiltEventSet(data)
  }

  const setDefaultCameraPos = (data) => {
    mDefaultCameraPos.current = data
    _setDefaultCameraPos(data)
  }

  const setFocusDiv = (data) => {
    mCurrentDiv.current = data
    _setFocusDiv(data)
  }

  /*useEffect(() => {
    setIsTiltEventSet(isPolosPageVisible)
    if (mainCamera.current) {

    }
  }, [isPolosPageVisible])*/

  /*onload = () => {
    console.log('onload')
  }*/

  useEffect(() => {
    mIsMainMenuVisible.current = isMainMenuVisible
    mCurrentDiv.current = null
    if (!isMainMenuVisible) {
      setDefaultCameraPos(mainCamera.current.position.clone())
    }
  }, [isMainMenuVisible])

  useEffect(() => {
    setFocusDiv(currentDiv)
  }, [currentDiv])

  useEffect(() => {
    scene.background = textureCube

    setMainCameraRef(mainCamera.current)
    mainCamera.current.lookAt(...mainCameraPos.initialLookAt)

    window.addEventListener('mousemove', (e) => {
      tiltCameraOnMouseMoviment(e)
    })

    const loadConfig = async () => {
      // this key must be changed in order to reset config
      const resetKey = 'dsdsd'
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
    if (
      (isFirsMenuVisible || isMainMenuVisible) &&
      sceneMesh.current != null &&
      groupCamera.current != null
    ) {
      groupCamera.current.rotation.x = sceneMesh.current.rotation.x * -1
      groupCamera.current.rotation.y = sceneMesh.current.rotation.y * -1
      groupCamera.current.rotation.z = sceneMesh.current.rotation.z * -1
    }
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

    if (isMouseCentered || mCurrentDiv.current !== null) {
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
    //tiltCameraOnMouseMoviment(mouse)
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
      tension: 2,
      friction: 9,
      precision: 0.006,
    },
    cancel: mCurrentDiv.current !== null,
  })

  function tiltCameraOnMouseMoviment(mouse) {
    var roatationStrength = 10
    if (mCurrentDiv.current != null && !mIsMainMenuVisible.current) {
      var div = mCurrentDiv.current
      var { clientX: x, clientY: y } = mouse
      var distanceFromCenterX = x - window.innerWidth / 2
      var distanceFromCenterY = y - window.innerHeight / 2
      var rotateX =
        (distanceFromCenterX / window.innerWidth) * roatationStrength
      var rotateY =
        (distanceFromCenterY / window.innerHeight) * -roatationStrength
      var divRotationX = rotateX
      var divRotationY = rotateY
      if (mainCamera.current && groupCamera.current) {
        //sceneMesh.current.rotation.x = rotateY * (Math.PI / 180)
        //sceneMesh.current.rotation.y = rotateX * (Math.PI / 180)
        groupCamera.current.rotation.x = rotateY * (Math.PI / 180) * 0.7
        groupCamera.current.rotation.y = rotateX * (Math.PI / 180) * 0.7
        div.style.transform = `perspective(1000px) rotateX(${divRotationY}deg) rotateY(${divRotationX}deg) scale3d(1, 1, 1) translate(${
          distanceFromCenterX * 0.03
        }px,${distanceFromCenterY * 0.03}px)`
      }
    }
  }

  function getScreenPosition(object, camera) {
    var position = object.position.clone()
    camera.updateMatrixWorld()
    position.project(camera)
    position.x = ((position.x + 1) / 2) * window.innerWidth
    position.y = -((position.y - 1) / 2) * window.innerHeight
    position.z = 0
  }

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
      <group ref={groupCamera}>
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
      </group>

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
            {/*    console.log(*/}
            {/*      JSON.stringify([*/}
            {/*        ...refTransformControls.current.gizmo.object.position,*/}
            {/*      ]),*/}
            {/*    )*/}
            {/*    console.log('Camera Position')*/}
            {/*    console.log(mainCamera.current.position)*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <BlackHole scale={1} />*/}
            {/*  /!*<Star scale={10} color={'#fff9f9'} />*!/*/}
            {/*</TransformControls>*/}

            {/*<BlackHole scale={36} position={[0, 100, 0]} />*/}

            <GalaxyMenu />
            <GalaxyMenuCDSVirtual />
          </animated.mesh>
        </>
      )}
    </>
  )
}
