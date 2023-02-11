import create from 'zustand'
import { gsap } from 'gsap'
import { arr2Xyz } from './utils/Utils'
import {
  beneficiosPath,
  galaxyMenuItemPositions,
  mainCameraPos,
  nucleosPath,
  polosPath,
} from './utils/elementsPositions'

export const useStore = create((set) => ({
  isMusicPlaying: false,
  setMusicToPlay: (what) => set((state) => ({ isMusicPlaying: what })),
  userStoppedMusic: false,
  setUserStoppedMusic: (what) => set((state) => ({ userStoppedMusic: what })),

  initialButtonClicked: false,
  toggleInitialButton: () =>
    set((state) => ({ initialButtonClicked: !state.initialButtonClicked })),

  isMainMenuVisible: false,
  toggleMainMenuVisible: () =>
    set((state) => ({ isMainMenuVisible: !state.isMainMenuVisible })),

  isNucleosPageVisible: false,
  toggleNucleosPage: () =>
    set((state) => ({ isNucleosPageVisible: !state.isNucleosPageVisible })),

  isPolosPageVisible: false,
  togglePolosPage: () =>
    set((state) => ({ isPolosPageVisible: !state.isPolosPageVisible })),

  isAcademicosPageVisible: false,
  toggleAcademicosPage: () =>
    set((state) => ({
      isAcademicosPageVisible: !state.isAcademicosPageVisible,
    })),

  isBeneficiosPageVisible: false,
  toggleBeneficiosPage: () =>
    set((state) => ({
      isBeneficiosPageVisible: !state.isBeneficiosPageVisible,
    })),

  isHistoriasPageVisible: false,
  toggleHistoriasPage: () =>
    set((state) => ({
      isHistoriasPageVisible: !state.isHistoriasPageVisible,
    })),

  isTecnologiaPageVisible: false,
  toggleTecnologiaPage: () =>
    set((state) => ({
      isTecnologiaPageVisible: !state.isTecnologiaPageVisible,
    })),

  isCentrosPageVisible: false,
  toggleCentrosPage: () =>
    set((state) => ({
      isCentrosPageVisible: !state.isCentrosPageVisible,
    })),

  mainCameraRef: null,
  setMainCameraRef: (cameraRef) => set(() => ({ mainCameraRef: cameraRef })),

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

  playPolosPath: (onComplete) =>
    set((state) => state.playBezierCurve(polosPath, onComplete)),

  playAcademicosPath: (onComplete) =>
    set((state) => state.playBezierCurve(polosPath, onComplete)),

  playBeneficiosPath: (onComplete) =>
    set((state) =>
      state.playBezierCurve(
        beneficiosPath,
        onComplete,
        galaxyMenuItemPositions.polosPosition,
      ),
    ),

  playHistoriasPath: (onComplete) =>
    set((state) => state.playBezierCurve(polosPath, onComplete)),

  playTecnologiaPath: (onComplete) =>
    set((state) => state.playBezierCurve(polosPath, onComplete)),

  playCentrosPath: (onComplete) =>
    set((state) => state.playBezierCurve(polosPath, onComplete)),

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
