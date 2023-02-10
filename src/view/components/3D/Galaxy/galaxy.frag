varying vec4 varyColor;
varying vec4 varyPointPosition;

void main() {
  float pointCoordDistance = distance(gl_PointCoord, vec2(0.5));
  pointCoordDistance *= 2.0;
  pointCoordDistance = 1.0 - pointCoordDistance;
  pointCoordDistance = pow(pointCoordDistance, 0.8);

  float cleanCut =  step(pointCoordDistance, 0.5);

  vec3 color = mix(
    vec3(0.0),
    vec3(varyColor.xyz),
    pointCoordDistance
  );

  gl_FragColor = vec4(vec3(color), 1.0);

  // simple fading circle
//  gl_FragColor = vec4(vec3(pointCoordDistance), 1.0);
}