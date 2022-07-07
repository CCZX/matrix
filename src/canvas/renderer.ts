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

  // public viewportRect

  constructor(config: Config) {
    this.el = config.el;
    this.ctx = config.el.getContext('2d')!;

    this.handleCoordinate();

    Renderer.instance = this;
  }

  private handleCoordinate() {
    const { width, height } = this.el;
    this.ctx.transform(1, 0, 0, -1, width / 2, height / 2);
  }
}
