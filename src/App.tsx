import { FC } from 'react';
import Canvas from './canvas/index';
import Config from './config';

const App: FC<{}> = () => {
  return (
    <div className='app'>
      <Config />
      <Canvas />
    </div>
  );
};

export default App;
