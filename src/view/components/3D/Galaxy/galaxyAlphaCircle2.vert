uniform float uniSize;
uniform float uniTime;
uniform vec3 uniColor;
uniform vec3 uniColor2;
uniform float mixFactorUniColor1;
uniform float mixFactorRadiusUniColor2;
uniform float uniTransparency;
varying vec3 varyColor;
varying vec3 varyColor2;
varying vec3 varyPosition;
varying float varyMixFactorUniColor1;
varying float varyMixFactorRadiusUniColor2;
varying float varyTransparency;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float angle = atan(modelPosition.x, modelPosition.z);
  float distanceToCenter = distance(modelPosition.xyz, vec3(0.0));
  float angleOffset = 1000.0 / distanceToCenter * uniTime;
  angle += angleOffset;
  modelPosition.x += cos(angle) * 30.0;
  modelPosition.y += sin(angle) * 60.0;
  modelPosition.z += cos(angle) * 90.0;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;
  gl_Position = projectedPosition;

  //scale
  gl_PointSize = uniSize * 1.0;
  // TODO size attenation..
  // this multipling should not be needed
  gl_PointSize *= 50.0;
  // check "scale" constant 6.0 (shoud be 1.0)
  gl_PointSize *= ( 10.0 / - viewPosition.z );

  varyColor = uniColor;
  varyColor2 = uniColor2;
  varyTransparency = uniTransparency;
  varyMixFactorUniColor1 = mixFactorUniColor1;
  varyMixFactorRadiusUniColor2 = mixFactorRadiusUniColor2;
  varyPosition = modelPosition.xyz;
}
