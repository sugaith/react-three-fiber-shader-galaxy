varying vec4 varyColor;
varying vec3 varyPosition;

void main() {
  float pointCoordDistance = distance(gl_PointCoord, vec2(0.5));
  pointCoordDistance *= 2.0;
  pointCoordDistance = 1.0 - pow(pointCoordDistance, 10.8);
//  float cleanCut = step(pointCoordDistance, 0.5);

  vec3 mixedColor = mix(
    vec3(0.0),
    vec3(varyPosition.y, 0.4,  0.8),
    pointCoordDistance
  );

  gl_FragColor = vec4(vec3(mixedColor), 0.81);
}