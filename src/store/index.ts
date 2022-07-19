import { observable, action } from 'mobx';

class Store {
  @observable matrixList = [];

  @action addMatrix() {}

  @action removeMatrix() {}

  @action updateMatrix() {}
}

export default Store;
