import create from 'zustand'
import { gsap } from 'gsap'
import { rgbDecimal2Int } from './utils/Utils'

const defaultDuration = 6

export const useControlsStore = create((set) => ({
  transitionToState0: (duration) =>
    set((state) => {
      state.setParticleSize(40, duration)
      state.setGalaxySize(20)
      state.setTransparency(1, duration)
      state.setMixColorFactor2(3.94, duration)
      state.setMixColorFactor1(2, duration)
      state.setUniColor({ r: 145, g: 169, b: 255 }, duration)
      state.setUniColor2({ r: 0, g: 26, b: 141 }, duration)
    }),

  transitionToState1: (duration) =>
    set((state) => {
      state.setParticleSize(36, duration)
      state.setGalaxySize(15, duration)
      state.setTransparency(0.55, duration)
      state.setMixColorFactor2(7.79, duration)
      state.setMixColorFactor1(2, duration)
      state.setUniColor({ r: 145, g: 169, b: 255 }, duration)
      state.setUniColor2({ r: 0, g: 26, b: 141 }, duration)
    }),

  transitionToState2: (duration) =>
    set((state) => {
      state.setParticleSize(24, duration)
      state.setGalaxySize(510, duration)
      state.setTransparency(1, duration)
      state.setMixColorFactor1(2, duration)
      state.setMixColorFactor2(5.11, duration)
      state.setUniColor({ r: 151, g: 145, b: 255 }, duration)
    }),

  particleSize: 90,
  setParticleSize: (toSize, duration) =>
    set((state) => {
      const elementAux = { value: state.particleSize }
      gsap.to(elementAux, {
        value: toSize,
        duration: duration || defaultDuration,
        onUpdate: () => {
          set(() => ({ particleSize: elementAux.value }))
        },
      })
    }),

  galaxySize: 90,
  setGalaxySize: (whatSize) => set(() => ({ galaxySize: whatSize })),

  transparency: 0.36,
  setTransparency: (to, duration) =>
    set((state) => {
      const elementAux = { value: state.transparency }
      gsap.to(elementAux, {
        value: to,
        duration: duration || defaultDuration,
        onUpdate: () => {
          set(() => ({ transparency: elementAux.value }))
        },
      })
    }),

  uniColor: { r: 145, g: 169, b: 255 },
  setUniColor: (to, duration) =>
    set((state) => {
      const elementAux = { ...state.uniColor }
      gsap.to(elementAux, {
        ...to,
        duration: duration || defaultDuration,
        onUpdate: () => {
          set(() => ({ uniColor: rgbDecimal2Int(elementAux) }))
        },
      })
    }),

  uniColor2: { r: 0, g: 26, b: 141 },
  setUniColor2: (to, duration) =>
    set((state) => {
      const elementAux = { ...state.uniColor2 }
      gsap.to(elementAux, {
        ...to,
        duration: duration || defaultDuration,
        onUpdate: () => {
          set(() => ({ uniColor2: rgbDecimal2Int(elementAux) }))
        },
      })
    }),

  mixColorFactor1: 2,
  setMixColorFactor1: (to, duration) =>
    set((state) => {
      const elementAux = { value: state.mixColorFactor1 }
      gsap.to(elementAux, {
        value: to,
        duration: duration || defaultDuration,
        onUpdate: () => {
          set(() => ({ mixColorFactor1: elementAux.value }))
        },
      })
    }),

  mixColorFactor2: 3.94,
  setMixColorFactor2: (to, duration) =>
    set((state) => {
      const elementAux = { value: state.mixColorFactor2 }
      gsap.to(elementAux, {
        value: to,
        duration: duration || defaultDuration,
        onUpdate: () => {
          set(() => ({ mixColorFactor2: elementAux.value }))
        },
      })
    }),
}))
