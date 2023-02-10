varying vec4 varyColor;
varying vec3 varyPosition;

void main() {
  float pointCoordDistance = distance(gl_PointCoord, vec2(0.5));
  pointCoordDistance *= 2.0;
  pointCoordDistance = 1.0 - pointCoordDistance;
  pointCoordDistance = pow(pointCoordDistance, 0.8);

  float distFromCenter = distance(vec3(0.0), varyPosition);
  vec3 mixedColor = mix(
    vec3(0.0),
    vec3(sin(varyPosition.z) , 1.0 + cos(varyPosition.x), 52.0 + cos(varyPosition.x)),
    pointCoordDistance
  );
  mixedColor = mix(
    vec3(1.0),
    mixedColor,
    distFromCenter * 0.001
  );

  gl_FragColor = vec4(vec3(mixedColor), 1.0);

  // simple fading circle
//  gl_FragColor = vec4(vec3(pointCoordDistance), 1.0);
}