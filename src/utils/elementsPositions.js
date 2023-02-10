import * as THREE from 'three'
const y_position = 500
const z_position = 1500
export const mainCameraPos = {
  initialPos: [3768, 3637, 2585],
  // initialPos: [3066, 4191, 4601],

  initialLookAt: [-100, 0, 2700],
  // initialLookAt: [-1737, -169, 3506],

  topView: [1500, 3600, 0],
  topViewLookAt: [-500, 10, 0],
  insidePagesLookAt: [-100, 0, 2700],
}

export const nucleosPath = new THREE.CubicBezierCurve3(
  new THREE.Vector3(...mainCameraPos.topView),
  new THREE.Vector3(445.4, 4598, 917),
  new THREE.Vector3(-738.5, 2452.77, 1621),
  new THREE.Vector3(-2866, -1365, -90),
)

export const galaxyMenuItemPositions = {
  nucleosPosition: [-2400, y_position, 0],
  polosPosition: [-2000, y_position, -2000],
  beneficiosPosition: [-2000, y_position, z_position - 300],
  insidePagesLookAt: [-100, 0, 2700],
}
