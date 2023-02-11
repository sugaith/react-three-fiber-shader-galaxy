import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'
import { Leva, useControls } from 'leva'
import Scene from './view/Scene'
import HtmlView from './view/HtmlView'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import musicSwitchIcon from './assets/icons/botao-som.svg'
import { useStore } from './Store'

const levaTheme = { sizes: { rootWidth: '240px' } }

export default function App() {
  const { enableOrbitControls } = useControls('General', {
    enableOrbitControls: true,
  })
  const isMusicPlaying = useStore((state) => state.isMusicPlaying)
  const setMusicToPlay = useStore((state) => state.setMusicToPlay)

  const setUserStoppedMusic = useStore((state) => state.setUserStoppedMusic)

  const [musicHasStared, setMusicHasStarted] = useState(false)
  const soundCloudRobertRichPerpetual = 'https://youtu.be/sNwukK7Y8wQ?t=6'
  return (
    <>
      <Stats showPanel={0} className="stats" />
      <Leva
        theme={levaTheme}
        oneLineLabels={true}
        hideTitleBar={false}
        collapsed={true}
        hidden={false}
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

      <CanvasContainer
        onClick={() => {
          if (musicHasStared) return
          setMusicToPlay(true)
          setMusicHasStarted(true)
        }}
      >
        <Canvas
        // onCreated={state => state.gl.setClearColor("red")}
        // colorManagement
        // camera={{position: [0, 300, 0], fov: 120}}
        >
          <color attach="background" args={['black']} />
          {enableOrbitControls && <OrbitControls makeDefault />}
          <Suspense fallback={null}>
            <Scene />
            {/*<HtmlView3D />*/}
          </Suspense>
        </Canvas>
      </CanvasContainer>

      <HtmlView />
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
