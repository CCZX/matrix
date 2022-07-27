import { PIXEL_RATIO } from '../const';

export default abstract class Shape {
  get getPixelRatio() {
    return PIXEL_RATIO;
  }

  abstract draw(ctx: CanvasRenderingContext2D): void;
}
