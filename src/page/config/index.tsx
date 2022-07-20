import { FC, useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';
import Matrix from './components/matrix';
import './index.scss';

interface ConfigProps {}

const Config: FC<ConfigProps> = (props) => {
  const context = useContext(MobXProviderContext);

  const handleMatrixChange = (matrix: Matrix) => {
    console.log(matrix);
  };

  return (
    <div className='config-area'>
      <span>transform matrix</span>
      <Matrix onChange={handleMatrixChange} />
    </div>
  );
};

export default Config;
