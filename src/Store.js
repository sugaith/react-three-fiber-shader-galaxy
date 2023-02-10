import create from 'zustand'
import { gsap } from 'gsap'
import { arr2Xyz } from './utils/Utils'
import {
  galaxyMenuItemPositions,
  mainCameraPos,
  nucleosPath,
} from './utils/elementsPositions'

export const useStore = create((set) => ({
  isMusicPlaying: false,
  setMusicToPlay: (what) => set((state) => ({ isMusicPlaying: what })),
  userStoppedMusic: false,
  setUserStoppedMusic: (what) => set((state) => ({ userStoppedMusic: what })),

  canShowMaskEffectOnMain: false,
  setCanShowMaskEffectOnMain: (what) =>
    set((state) => ({ canShowMaskEffectOnMain: what })),

  canShowMaskEffectOnFirst: false,
  setCanShowMaskEffectOnFirst: (what) =>
    set((state) => ({ canShowMaskEffectOnFirst: what })),

  initialButtonClicked: false,
  toggleInitialButton: () =>
    set((state) => ({ initialButtonClicked: !state.initialButtonClicked })),

  isFirsMenuVisible: true,
  toggleFirstMenuVisible: () =>
    set((state) => ({ isFirsMenuVisible: !state.isFirsMenuVisible })),

  isMainMenuVisible: false,
  toggleMainMenuVisible: () =>
    set((state) => ({ isMainMenuVisible: !state.isMainMenuVisible })),

  isNucleosPageVisible: false,
  toggleNucleosPage: () =>
    set((state) => ({ isNucleosPageVisible: !state.isNucleosPageVisible })),

  mainCameraRef: null,
  setMainCameraRef: (cameraRef) => set(() => ({ mainCameraRef: cameraRef })),

  currentDiv: null,
  setCurrentDiv: (div) => set(() => ({ currentDiv: div })),

  playToFirstView: () =>
    set((state) => {
      if (!state?.mainCameraRef) return
      const { mainCameraRef } = state

      const duration = 2.4

      gsap.to(mainCameraRef.position, {
        ...arr2Xyz(mainCameraPos.initialPos),
        duration,
      })
      const lookAtTween = { ...arr2Xyz(mainCameraPos.topViewLookAt) }
      gsap.to(lookAtTween, {
        ...arr2Xyz(mainCameraPos.initialLookAt),
        onUpdate: () =>
          mainCameraRef.lookAt(lookAtTween.x, lookAtTween.y, lookAtTween.z),
        duration,
      })
    }),

  playToTopView: () =>
    set((state) => {
      if (!state?.mainCameraRef) return
      const { mainCameraRef } = state

      const duration = 2.4

      gsap.to(mainCameraRef.position, {
        ...arr2Xyz(mainCameraPos.topView),
        duration,
      })
      const lookAtTween = { ...arr2Xyz(mainCameraPos.initialLookAt) }
      gsap.to(lookAtTween, {
        ...arr2Xyz(mainCameraPos.topViewLookAt),
        onUpdate: () =>
          mainCameraRef.lookAt(lookAtTween.x, lookAtTween.y, lookAtTween.z),
        duration,
      })
    }),

  playNucleosPath: (onComplete) =>
    set((state) => state.playBezierCurve(nucleosPath, onComplete)),

  playBezierCurve: (curvedPath, onComplete, lookAtPos) =>
    set((state) => {
      if (!state?.mainCameraRef) return
      const { mainCameraRef } = state

      const keyframes = []
      curvedPath.getPoints(15).map((curvePoint) => {
        keyframes.push({
          x: curvePoint.x,
          y: curvePoint.y,
          z: curvePoint.z,
          duration: 0.05,
        })
      })

      const duration = 2.4
      gsap.to(mainCameraRef.position, { keyframes, duration })
      const tLine = gsap.timeline()
      const lookAtTween = { ...arr2Xyz(0) }
      tLine.to(lookAtTween, {
        ...arr2Xyz(lookAtPos || galaxyMenuItemPositions.nucleosPosition),
        onUpdate: () =>
          mainCameraRef.lookAt(lookAtTween.x, lookAtTween.y, lookAtTween.z),
        duration: duration / 2,
      })
      tLine.to(lookAtTween, {
        ...arr2Xyz(0),
        duration: duration / 2,
        onUpdate: () =>
          mainCameraRef.lookAt(lookAtTween.x, lookAtTween.y, lookAtTween.z),
        onComplete,
      })
    }),
}))
