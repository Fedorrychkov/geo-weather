import { observable } from 'mobx';

class AppStore {
  @observable city = ['Moscow', 'Kazan'];
  @observable cities = [];
  @observable localPlace = {};
  addCity(city) {
    let hasCity = false;
    this.city.map((item, index) => {
      if (item.toLowerCase() === city.toLowerCase()) hasCity = true;
      return index;
    });
    if (!hasCity) this.city.push(city);
  }
}

const store = new AppStore();

export default store;
