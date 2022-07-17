import { FC } from 'react';

interface MatrixProps extends Partial<Matrix> {
  onChange(matrix: Matrix): void;
}

/**
 * | a | c | tx |
 * | b | c | ty |
 * | 0 | 0 | 1 |
 * @param props
 * @returns
 */
const Matrix: FC<MatrixProps> = (props) => {
  const { a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0, onChange } = props;

  const handleChange = (matrix: Partial<Matrix>) => {
    const nextA = matrix.a || a || 1;
    const nextB = matrix.b || b || 0;
    const nextC = matrix.c || c || 0;
    const nextD = matrix.d || d || 1;
    const nextTx = matrix.tx || tx || 0;
    const nextTy = matrix.ty || ty || 0;

    onChange({ a: nextA, b: nextB, c: nextC, d: nextD, tx: nextTx, ty: nextTy });
  };

  return (
    <div className='matrix-block'>
      <div>
        a:{' '}
        <input
          value={a}
          type='text'
          className='a'
          onBlur={(e) => handleChange({ a: Number(e.target.value) })}
        />
      </div>
      <div>
        b:{' '}
        <input
          value={b}
          type='text'
          className='b'
          onBlur={(e) => handleChange({ b: Number(e.target.value) })}
        />
      </div>
      <div>
        c:{' '}
        <input
          value={c}
          type='text'
          className='c'
          onBlur={(e) => handleChange({ c: Number(e.target.value) })}
        />
      </div>
      <div>
        d:{' '}
        <input
          value={d}
          type='text'
          className='d'
          onBlur={(e) => handleChange({ d: Number(e.target.value) })}
        />
      </div>
      <div>
        tx:{' '}
        <input
          value={tx}
          type='text'
          className='tx'
          onBlur={(e) => handleChange({ tx: Number(e.target.value) })}
        />
      </div>
      <div>
        ty:{' '}
        <input
          value={ty}
          type='text'
          className='ty'
          onBlur={(e) => handleChange({ ty: Number(e.target.value) })}
        />
      </div>
    </div>
  );
};

export default Matrix;
