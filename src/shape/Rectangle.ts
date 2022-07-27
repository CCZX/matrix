import Shape from './Shape';

export default class Rectangle extends Shape {
  private x: number;
  private y: number;
  private width: number;
  private height: number;

  constructor(x: number = 0, y: number = 0, width: number = 10, height: number = 10) {
    super();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  applyMatrix() {}

  draw(ctx: CanvasRenderingContext2D): void {}
}
