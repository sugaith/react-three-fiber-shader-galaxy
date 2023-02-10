uniform float time;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vPosition.x += sin(time + vPosition.z * 4.0) / 4.0;
  vPosition.y += cos(time + vPosition.z * 4.0) / 4.0;
  gl_Position =
    projectionMatrix
    * modelViewMatrix
    * vec4(vPosition, 1.0)
  ;
}