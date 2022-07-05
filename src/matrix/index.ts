/**
 * matrix
 * | a | c | tx |
 * | b | c | ty |
 * | 0 | 0 | 1 |
 */
export default class Matrix {
  private a: number;
  private b: number;
  private c: number;
  private d: number;
  private tx: number;
  private ty: number;

  constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
  }

  /**
   * 平移矩阵
   * @param tx 
   * @param ty 
   */
  translate(tx: number, ty: number) {
    this.tx = this.tx + tx;
    this.ty = this.ty + ty;
  }

  /**
   * 缩放矩阵
   * | sx | c | tx |
   * | b | sy | ty |
   * | 0 | 0 | 1 |
   * @param sx x 轴方向的缩放比例
   * @param sy y 轴方向的缩放比例
   */
  scale(sx: number, sy: number) {
    this.a = this.a * sx;
    this.d = this.d * sy;
  }

  /**
   * 旋转矩阵
   * | cos | -sin | tx |
   * | sin | cos | ty |
   * | 0 | 0 | 1 |
   * @param rad 旋转的角度，单位弧度
   */
  rotate(rad: number) {
    const cosV = Math.cos(rad);
    const sinV = Math.sin(rad);

    this.a = cosV * this.a;
    this.b = sinV * this.b;
    this.c = -sinV * this.c;
    this.d = cosV * this.d;
  }
}
