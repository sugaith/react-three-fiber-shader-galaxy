import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'
import { Leva, useControls } from 'leva'
import Scene from './view/Scene'
import HtmlView from './view/HtmlView'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import musicSwitchIcon from './assets/icons/botao-som.svg'
import { useStore } from './Store'
import $ from 'jquery'
import MainMaskPage from './view/MaskPage/MainMaskPage'
import FirstMaskPage from './view/MaskPage/FirstMaskPage'
import { BackButton } from './view/GeneralStyles'
import { useControlsStore } from './ControlsStore'
import CircularStatic from './view/LoadingPage/LoadingPage'
import mobile from '../src/assets/mobile_home.png'
window.JQuery = $
import { isMobile } from 'react-device-detect'

const levaTheme = { sizes: { rootWidth: '240px' } }

export default function App() {
  const { enableOrbitControls } = useControls('General', {
    enableOrbitControls: false,
  })
  const isMusicPlaying = useStore((state) => state.isMusicPlaying)
  const setMusicToPlay = useStore((state) => state.setMusicToPlay)
  const setUserStoppedMusic = useStore((state) => state.setUserStoppedMusic)
  const isMainMenuVisible = useStore((state) => state.isMainMenuVisible)
  const isFirsMenuVisible = useStore((state) => state.isFirsMenuVisible)
  const toggleFirstMenuVisible = useStore(
    (state) => state.toggleFirstMenuVisible,
  )
  const toggleMainMenuVisible = useStore((state) => state.toggleMainMenuVisible)
  const toggleInitialButton = useStore((state) => state.toggleInitialButton)
  const playToFirstView = useStore((state) => state.playToFirstView)
  const transitionToState0 = useControlsStore(
    (state) => state.transitionToState0,
  )

  const [shouldShowGalaxy, setShouldShowGalaxy] = useState(false)

  function onBackButtonClick() {
    transitionToState0()
    playToFirstView()
    toggleMainMenuVisible()
    toggleInitialButton()
    toggleFirstMenuVisible()
    setTimeout(() => {
      animateText('#welcome')
      animateText('#welcome2')
    }, 100)
  }

  useEffect(() => {
    if (shouldShowGalaxy) {
      animateText('#welcome')
      animateText('#welcome2')
      const icon = document.getElementById('enter-icon')
      const head = document.getElementsByTagName('head')[0]
      let keyframes = `@keyframes clickit {
              0% {
                opacity: 0;
              }
              80% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }`

      let style = document.createElement('STYLE')
      style.innerHTML = keyframes
      head.appendChild(style)
      icon.style.animationName = 'clickit'
      icon.style.animationDelay = '6.5s'
    }
  }, [shouldShowGalaxy])

  const [musicHasStared, setMusicHasStarted] = useState(false)
  const soundCloudRobertRichPerpetual = 'https://youtu.be/sNwukK7Y8wQ?t=6'

  return (
    <>
      {/*<Stats showPanel={0} className="stats" />*/}
      <div style={{ visibility: shouldShowGalaxy ? 'visible' : 'hidden' }}>
        <Leva
          theme={levaTheme}
          oneLineLabels={true}
          hideTitleBar={false}
          collapsed={true}
          hidden={true}
        />
        <Player
          url={soundCloudRobertRichPerpetual}
          width={'0'}
          height={'0'}
          muted={false}
          playing={isMusicPlaying}
        />
        <MusicSwitch
          src={musicSwitchIcon}
          active={isMusicPlaying}
          onClick={() => {
            setUserStoppedMusic(isMusicPlaying)
            setMusicToPlay(!isMusicPlaying)
          }}
        />
        {isMainMenuVisible ? <BackButton onClick={onBackButtonClick} /> : null}
        <CanvasContainer>
          <Canvas
          // onCreated={state => state.gl.setClearColor("red")}
          // colorManagement
          // camera={{position: [0, 300, 0], fov: 120}}
          >
            {/*<color attach="background" args={['black']} />*/}
            {enableOrbitControls && <OrbitControls makeDefault />}
            <Suspense fallback={null}>
              <Scene />
              {/*<HtmlView3D />*/}
            </Suspense>
          </Canvas>
        </CanvasContainer>

        <HtmlView />
        <MainMaskPage />
        {/*<FirstMaskPage />*/}
      </div>
      <div
        style={{
          display: shouldShowGalaxy ? 'none' : 'block',
        }}
      >
        <CircularStatic
          click={() => {
            setMusicToPlay(!isMusicPlaying)
            setShouldShowGalaxy(true)
            transitionToState0()
          }}
        />
      </div>
      {isMobile ? <MobileScreen /> : <></>}
    </>
  )
}

function MusicSwitch({ src, active, onClick }) {
  return (
    <MusicSwitchContainer src={src} active={active} onClick={onClick}>
      <p>AUDIO</p>
      <img src={src} />
    </MusicSwitchContainer>
  )
}

function MobileScreen() {
  const [imageHeight, setimageHeight] = useState('0')
  const [imageWidth, setimageWidth] = useState('0')
  const [screenHeight, setScreenHeight] = useState('0')
  const [screenWidth, setScreenWidth] = useState('0')
  const [isMobileScreenVisible, setIsMobileScreenVisible] = useState(true)

  function onResise() {
    var ratio = 539 / 957
    var width = 0
    var height = 0
    var maximizedToWidth = [window.innerWidth, window.innerWidth / ratio]
    var maximizedToHeight = [window.innerHeight * ratio, window.innerHeight]
    if (maximizedToWidth[1] > window.innerHeight) {
      height = maximizedToHeight[1]
      width = maximizedToHeight[0]
    } else {
      height = maximizedToWidth[1]
      width = maximizedToWidth[0]
    }
    setimageHeight(height + 'px')
    setimageWidth(width + 'px')
    setScreenHeight(window.outerHeight + 'px')
    setScreenWidth(window.outerWidth + 'px')
  }

  onload = () => {
    onResise()
    window.addEventListener('resize', onResise)
  }

  return (
    <>
      {isMobileScreenVisible ? (
        <div
          onClick={() => {
            setIsMobileScreenVisible(false)
          }}
          style={{
            position: 'absolute',
            background: 'black',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            zIndex: 'inifinity',
            height: '100%',
          }}
        >
          <img src={mobile} style={{ height: imageHeight }} />
        </div>
      ) : null}
    </>
  )
}

const Player = styled(ReactPlayer)`
  position: absolute;
  z-index: -100;
  display: block;
`
const CanvasContainer = styled.div`
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
`
const MusicSwitchContainer = styled.div`
  position: absolute;
  padding: 3px 9px;
  z-index: 15;
  bottom: 3%;
  right: 3%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  background-color: rgba(
    31,
    158,
    223,
    ${({ active }) => (active ? '0.15' : '0')}
  );
  border-radius: 90px;
  border: 1px solid #1f9edf;
  //opacity: 0.63;
  cursor: pointer;
  p {
    letter-spacing: 3px;
    font-size: 0.6rem;
  }
  img {
    width: 1.3rem;
  }
`
