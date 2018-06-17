import { observable } from 'mobx';

class AppStore {
  @observable city = ['Moscow', 'Kazan'];
  @observable filter = '';
}

const store = new AppStore();

export default store;
