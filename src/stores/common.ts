import { observable, action } from 'mobx';

export default class CommonStore {
  @observable
  curr = 'question';

  constructor() {}

  @action.bound
  changeCurr(curr) {
    this.curr = curr;
  }
}
