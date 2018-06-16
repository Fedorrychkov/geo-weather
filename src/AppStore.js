import { observable, autorun } from 'mobx';

class AppStore  {    
    @observable city = ['Moscow', 'Kazan'];
    @observable filter = '';
}

var store = new AppStore;

export default store;

autorun(()=> {
    console.log(store.city);
});
