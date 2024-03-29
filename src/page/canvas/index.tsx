import { FC, useEffect, useRef } from 'react';
import Renderer from './renderer';
import { drawShape, initStage } from './utils';
import { PIXEL_RATIO } from '../../const';
import './index.scss';

interface CanvasProps {}

const Canvas: FC<CanvasProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { clientWidth, clientHeight } = containerRef.current!;

    const canvas = document.querySelector('canvas')!;

    canvas.width = clientWidth;
    canvas.height = clientHeight;

    new Renderer({ el: canvas });

    const renderer = Renderer.getInstance();

    if (renderer) {
      drawShape(renderer.ctx, PIXEL_RATIO);
    }
  }, []);

  return (
    <div ref={containerRef} className='canvas-area'>
      <canvas id='stage' />
    </div>
  );
};

export default Canvas;
