import { computed, observable } from "mobx"

export class TodoStore {
  @observable showNameModal = false;
  @observable showAddressModal = false;
  @observable showTeamsModal = false;



  @observable Name = 'Suhail';
  @observable category = 'Name';
  @observable tempName = '';
  @observable Address = '3591 fams ct';
  @observable tempAddress = '3591 fams ct';

  @observable Teams = ['knicks', 'nets','celtics'];
  @observable tempTeams = '3591 fams ct';









}

export default new TodoStore;