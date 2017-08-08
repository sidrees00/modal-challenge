import { computed, observable } from "mobx"

export class TodoStore {
  @observable showNameModal = false;
  @observable showAddressModal = false;
  @observable showTeamsModal = false;



  @observable name = 'Suhail';
  @observable category = 'Name';
  @observable temp = '';
  @observable address = '3591 fams ct';
  @observable tempAddress = '3591 fams ct';

  @observable teams = ['knicks', 'nets','celtics'];
  @observable tempTeams = '3591 fams ct';









}

export default new TodoStore;