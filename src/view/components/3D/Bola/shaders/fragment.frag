varying vec3 vPosition;

void main() {
  gl_FragColor = vec4(vPosition * 2.0, 1.0);
}