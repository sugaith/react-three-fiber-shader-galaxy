uniform float uniSize;
attribute float attrScale;
varying vec4 varyColor;
varying vec3 varyPosition;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;
  gl_Position = projectedPosition;

  gl_PointSize = uniSize * attrScale;

  // TODO size attenation..
  // this multipling should not be needed
  gl_PointSize *= 30.0;
  // check "scale" constant 6.0 (shoud be 1.0)
  gl_PointSize *= ( 6.0 / - viewPosition.z );

  varyColor = color;
  varyPosition = modelPosition.xyz;
}