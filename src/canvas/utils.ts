import Renderer from './renderer';

/**
 *
 * @param renderer
 */
export function initStage(renderer: Renderer, pixelRatio: number) {
  const { width, height } = renderer.el;
  const ctx = renderer.ctx;

  drawGrid(ctx, width, height, pixelRatio);

  drawCoordinate(ctx, width, height, pixelRatio);
}

/**
 *
 * @param ctx
 * @param width
 * @param height
 */
function drawCoordinate(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  pixelRatio: number,
) {
  ctx.beginPath();
  ctx.moveTo(-width / 2, 0);
  ctx.lineTo(width / 2, 0);

  ctx.moveTo(0, height / 2);
  ctx.lineTo(0, -height / 2);

  ctx.moveTo(width / 2 - pixelRatio, pixelRatio);
  ctx.lineTo(width / 2 - 0.5, 0);
  ctx.lineTo(width / 2 - pixelRatio, -pixelRatio);

  ctx.moveTo(pixelRatio, height / 2 - pixelRatio);
  ctx.lineTo(0, height / 2 - 0.5);
  ctx.lineTo(-pixelRatio, height / 2 - pixelRatio);

  ctx.lineWidth = 1;
  ctx.strokeStyle = '#000';
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, 4, 0, Math.PI * 2);
  ctx.fill();
}

/**
 *
 * @param ctx
 * @param width
 * @param height
 */
function drawGrid(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  pixelRatio: number,
) {
  for (let i = pixelRatio; i < width / 2 + pixelRatio; i += pixelRatio) {
    ctx.beginPath();
    ctx.moveTo(i, height / 2);
    ctx.lineTo(i, -height / 2);

    ctx.strokeStyle = 'lightgray';
    ctx.lineWidth = 0.5;

    ctx.stroke();
  }

  for (let i = -pixelRatio; i > -width / 2 - pixelRatio; i -= pixelRatio) {
    ctx.beginPath();
    ctx.moveTo(i, height / 2);
    ctx.lineTo(i, -height / 2);

    ctx.strokeStyle = 'lightgray';
    ctx.lineWidth = 0.5;

    ctx.stroke();
  }

  for (let i = pixelRatio; i < height / 2 + pixelRatio; i += pixelRatio) {
    ctx.beginPath();
    ctx.moveTo(width / 2, i);
    ctx.lineTo(-width / 2, i);

    ctx.strokeStyle = 'lightgray';
    ctx.lineWidth = 0.5;

    ctx.stroke();
  }

  for (let i = pixelRatio; i > -height / 2 - pixelRatio; i -= pixelRatio) {
    ctx.beginPath();
    ctx.moveTo(width / 2, i);
    ctx.lineTo(-width / 2, i);

    ctx.strokeStyle = 'lightgray';
    ctx.lineWidth = 0.5;

    ctx.stroke();
  }
}
