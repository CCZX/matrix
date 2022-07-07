import { FC, useEffect } from 'react';
import Renderer from './renderer';
import './index.scss';
import { drawCoordinate } from './utils';

interface CanvasProps {}

const Canvas: FC<CanvasProps> = (props) => {
  const { innerWidth, innerHeight } = window;

  useEffect(() => {
    const canvas = document.querySelector('canvas')!;

    new Renderer({ el: canvas });

    const renderer = Renderer.getInstance();

    if (renderer) {
      drawCoordinate(renderer);
    }
  }, []);

  return (
    <div className='canvas-area'>
      <canvas id='stage' width={innerWidth} height={innerHeight} />
    </div>
  );
};

export default Canvas;
