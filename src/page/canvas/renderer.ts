import { PIXEL_RATIO } from '../../const';
import Matrix from '../../math/matrix';
import Shape from '../../shape/Shape';

export interface Config {
  el: HTMLCanvasElement;
}

export default class Renderer {
  static instance: Renderer | null = null;
  static getInstance() {
    if (!this.instance) {
      console.warn('waring: renderer is not init;');
      return this.instance;
    }
    return this.instance;
  }

  public el: HTMLCanvasElement;

  public ctx: CanvasRenderingContext2D;

  get normalizedMatrix() {
    const { width, height } = this.el;
    return new Matrix(1, 0, 0, -1, width / 2, height / 2);
  }

  constructor(config: Config) {
    this.el = config.el;
    this.ctx = config.el.getContext('2d')!;

    Renderer.instance = this;

    this.init();
  }

  private handleCoordinate() {
    const { width, height } = this.el;
    this.ctx.transform(1, 0, 0, -1, width / 2, height / 2);
  }

  private init() {
    const { width, height } = this.el;
    this.ctx.transform(1, 0, 0, -1, width / 2, height / 2);

    for (let i = PIXEL_RATIO; i < width / 2 + PIXEL_RATIO; i += PIXEL_RATIO) {
      this.ctx.beginPath();
      this.ctx.moveTo(i, height / 2);
      this.ctx.lineTo(i, -height / 2);

      this.ctx.strokeStyle = 'lightgray';
      this.ctx.lineWidth = 0.5;

      this.ctx.stroke();
    }

    for (let i = -PIXEL_RATIO; i > -width / 2 - PIXEL_RATIO; i -= PIXEL_RATIO) {
      this.ctx.beginPath();
      this.ctx.moveTo(i, height / 2);
      this.ctx.lineTo(i, -height / 2);

      this.ctx.strokeStyle = 'lightgray';
      this.ctx.lineWidth = 0.5;

      this.ctx.stroke();
    }

    for (let i = PIXEL_RATIO; i < height / 2 + PIXEL_RATIO; i += PIXEL_RATIO) {
      this.ctx.beginPath();
      this.ctx.moveTo(width / 2, i);
      this.ctx.lineTo(-width / 2, i);

      this.ctx.strokeStyle = 'lightgray';
      this.ctx.lineWidth = 0.5;

      this.ctx.stroke();
    }

    for (let i = PIXEL_RATIO; i > -height / 2 - PIXEL_RATIO; i -= PIXEL_RATIO) {
      this.ctx.beginPath();
      this.ctx.moveTo(width / 2, i);
      this.ctx.lineTo(-width / 2, i);

      this.ctx.strokeStyle = 'lightgray';
      this.ctx.lineWidth = 0.5;

      this.ctx.stroke();
    }

    this.ctx.beginPath();
    this.ctx.moveTo(-width / 2, 0);
    this.ctx.lineTo(width / 2, 0);

    this.ctx.moveTo(0, height / 2);
    this.ctx.lineTo(0, -height / 2);

    this.ctx.moveTo(width / 2 - PIXEL_RATIO, PIXEL_RATIO);
    this.ctx.lineTo(width / 2 - 0.5, 0);
    this.ctx.lineTo(width / 2 - PIXEL_RATIO, -PIXEL_RATIO);

    this.ctx.moveTo(PIXEL_RATIO, height / 2 - PIXEL_RATIO);
    this.ctx.lineTo(0, height / 2 - 0.5);
    this.ctx.lineTo(-PIXEL_RATIO, height / 2 - PIXEL_RATIO);

    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = '#000';
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.arc(0, 0, 4, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.save();
  }

  addChild(shape: Shape) {
    shape.draw(this.ctx);
  }
}
