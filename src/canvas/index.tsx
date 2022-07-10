import { FC, useEffect, useRef } from 'react';
import Renderer from './renderer';
import { initStage } from './utils';
import { PIXEL_RATIO } from '../const';
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
      initStage(renderer, PIXEL_RATIO);
    }
  }, []);

  return (
    <div ref={containerRef} className='canvas-area'>
      <canvas id='stage' />
    </div>
  );
};

export default Canvas;
