import Renderer from './renderer';

export function drawCoordinate(renderer: Renderer) {
  const { width, height } = renderer.el;
  const context = renderer.ctx;

  context.fillRect(0, 0, 4, 4);

  context.beginPath();
  context.moveTo(-100, -100);
  context.lineTo(100, -100);
  context.closePath();

  context.lineWidth = 5;
  context.strokeStyle = 'red';
  context.stroke();
}
