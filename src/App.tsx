import { FC } from 'react';
import { Provider } from 'mobx-react';
import Canvas from './page/canvas/index';
import Config from './page/config';
import Store from './store';

const store = new Store();

const App: FC<{}> = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Config />
        <Canvas />
      </div>
    </Provider>
  );
};

export default App;
