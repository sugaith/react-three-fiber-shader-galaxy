import { useCallback, useEffect } from 'react'
import { useControls } from 'leva'
import AsyncStorage from '@callstack/async-storage/'
import debounce from 'lodash/debounce'
import { Resizer } from 'postprocessing'

export const galaxyConfigFields = {
  galaxySizes: 'galaxySizes',
  galaxyColors: 'galaxyColors',
}

function saveConfig(newConfig) {
  const galaxyModelControls = JSON.stringify(newConfig)
  AsyncStorage.setItem(galaxyConfigFields.galaxySizes, galaxyModelControls)
  console.log('Config saved:', newConfig)
}

export function useGalaxySizeControls(config) {
  const [{ particleSize, galaxySize }, set] = useControls(
    'Galaxy Sizes',
    () => ({
      particleSize: {
        value: config?.particleSize || 45.35,
        min: 0.01,
        max: 180,
        step: 0.01,
      },
      galaxySize: {
        value: config?.galaxySize || 42.16,
        min: 1,
        max: 500,
        step: 0.01,
      },
    }),
  )

  useEffect(() => {
    saveConfigDebounce({ particleSize, galaxySize })
  }, [particleSize, galaxySize])

  const saveConfigDebounce = useCallback(
    debounce((newConfig) => {
      saveConfig(newConfig)
    }, 2700),
    [],
  )

  return { particleSize, galaxySize, setGalaxySize: set }
}

export function useGalaxyColorControls(config) {
  const [
    {
      uniColor,
      uniColor2,
      mixFactorUniColor1,
      mixFactorRadiusUniColor2,
      transparency,
    },
    set,
  ] = useControls('Galaxy Colors', () => ({
    transparency: {
      value: config?.transparency || 0.56,
      min: 0.01,
      max: 1.0,
      step: 0.01,
    },
    uniColor: config?.uniColor || { r: 174, g: 186, b: 229 },
    mixFactorUniColor1: {
      value: config?.mixFactorUniColor1 || 2,
      min: 0.01,
      max: 2.0,
      step: 0.01,
    },
    uniColor2: config?.uniColor2 || { r: 0, g: 47, b: 255 },
    mixFactorRadiusUniColor2: {
      value: config?.mixFactorRadiusUniColor2 || 3.9399,
      min: 0.01,
      max: 12,
      step: 0.01,
    },
  }))

  useEffect(() => {
    saveConfigDebounce({
      uniColor,
      uniColor2,
      mixFactorUniColor1,
      mixFactorRadiusUniColor2,
      transparency,
    })
  }, [
    uniColor,
    uniColor2,
    mixFactorUniColor1,
    mixFactorRadiusUniColor2,
    transparency,
  ])

  const saveConfigDebounce = useCallback(
    debounce((newConfig) => {
      saveConfig(newConfig)
    }, 2700),
    [],
  )

  return {
    uniColor,
    uniColor2,
    mixFactorUniColor1,
    mixFactorRadiusUniColor2,
    transparency,
    setGalaxyColors: set,
  }
}

export function useDepthOfFieldControls(config) {
  const [{ focusDistance, focalLength, bokehScale, width, height }, set] =
    useControls('Depth of Field'.toUpperCase(), () => ({
      focusDistance: {
        value: config?.focusDistance || 0.18,
        min: 0,
        max: 1,
        step: 0.0005,
      },
      focalLength: {
        value: config?.focalLength || 0.39,
        min: 0,
        max: 1,
        step: 0.0005,
      },
      bokehScale: {
        value: config?.bokehScale || 0.52,
        min: 0,
        max: 10,
        step: 0.01,
      },
      width: {
        value: config?.width || 128,
        min: 1,
        max: 270,
        step: 0.1,
      },
      height: {
        value: config?.height || 128,
        min: 1,
        max: 270,
        step: 0.1,
      },
    }))

  useEffect(() => {
    saveConfigDebounce({
      focusDistance,
      focalLength,
      bokehScale,
      width,
      height,
    })
  }, [focusDistance, focalLength, bokehScale, width, height])

  const saveConfigDebounce = useCallback(
    debounce((newConfig) => {
      saveConfig(newConfig)
    }, 2700),
    [],
  )

  return {
    focusDistance,
    focalLength,
    bokehScale,
    height,
    width,
    setDepthOfField: set,
  }
}

export function useBloomControls(config) {
  const [{ intensity, luminanceThreshold, luminanceSmoothing }, set] =
    useControls('BLOOM', () => ({
      intensity: {
        value: config?.intensity || 1,
        min: 0,
        max: 10,
        step: 0.1,
      },
      luminanceThreshold: {
        value: config?.luminanceThreshold || 0.0,
        min: 0,
        max: 1,
        step: 0.01,
      },
      luminanceSmoothing: {
        value: config?.luminanceSmoothing || 0.06,
        min: 0,
        max: 1,
        step: 0.005,
      },
    }))

  useEffect(() => {
    saveConfigDebounce({
      intensity,
      luminanceThreshold,
      luminanceSmoothing,
    })
  }, [intensity, luminanceThreshold, luminanceSmoothing])

  const saveConfigDebounce = useCallback(
    debounce((newConfig) => {
      saveConfig(newConfig)
    }, 2700),
    [],
  )

  return {
    intensity,
    luminanceThreshold,
    luminanceSmoothing,
    setBloom: set,
  }
}
