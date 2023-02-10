import React from 'react'
import styled from 'styled-components'
import { animated } from '@react-spring/web'
import Modal from 'react-modal'
import ReactPlayer from 'react-player'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export function ModalIFrame({ isOpened, setOpened, iFrame, videoLink }) {
  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: 0,
      zIndex: 50,
    },
    content: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: 0,
      borderRadius: 0,
      borderWidth: 0,
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }
  return (
    <Modal
      isOpen={isOpened}
      onRequestClose={() => setOpened(false)}
      style={customStyles}
      ariaHideApp={false}
    >
      <IFrameContainer>
        {!videoLink ? (
          <>{iFrame}</>
        ) : (
          <ReactPlayer
            url={videoLink}
            width={'100%'}
            height={'100%'}
            muted={false}
            playing={isOpened}
            controls={true}
          />
        )}
        <CloseIcon onClick={() => setOpened(false)} />
      </IFrameContainer>
    </Modal>
  )
}

const IFrameContainer = styled(animated.div)`
  background-color: rgba(0, 0, 0, 0.8);
  position: relative;
  width: clamp(360px, 90vw, 900px);
  height: clamp(150px, 90vw, 600px);
  overflow: hidden;
  z-index: 50;
`
const CloseIcon = styled(AiOutlineCloseCircle)`
  cursor: pointer;
  font-size: 2.4rem;
  top: 0;
  right: 0;
  position: absolute;
`
