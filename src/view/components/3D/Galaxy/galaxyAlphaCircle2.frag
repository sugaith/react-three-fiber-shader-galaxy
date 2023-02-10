varying vec3 varyColor;
varying vec3 varyColor2;
varying vec3 varyPosition;
varying float varyMixFactorUniColor1;
varying float varyMixFactorRadiusUniColor2;
varying float varyTransparency;

void main() {
  float pointCoordDistance = distance(gl_PointCoord, vec2(0.5));
//  pointCoordDistance *= 2.0;
//  pointCoordDistance = pow(pointCoordDistance, 30.0);
  float roundCut = step(pointCoordDistance, 0.5);
  vec3 blackAndWhiteBall = mix(
    vec3(0.0),
    vec3(1.0),
    roundCut
  );

  vec3 mixedColor2 = mix(
    blackAndWhiteBall,
    varyColor2,
    roundCut
  );

  vec3 mixedColor1 = mix(
    blackAndWhiteBall,
    varyColor,
    roundCut * varyMixFactorUniColor1
  );

  float distFromCenter = distance(vec3(0.0), varyPosition);
  vec3 radiusMixedColorBall = mix(
    mixedColor1,
    mixedColor2,
    distFromCenter * varyMixFactorRadiusUniColor2 / 10000.0
  );

  gl_FragColor = vec4(radiusMixedColorBall.xyz, varyTransparency);
}
