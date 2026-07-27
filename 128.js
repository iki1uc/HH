export function animatePyramid(gl, mesh, program) {
  let t = 0;

  function loop() {
    t += 0.01;

    gl.uniform1f(gl.getUniformLocation(program, "time"), t);

    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, mesh.vertices.length / 3);

    requestAnimationFrame(loop);
  }

  loop();
}
