import { computed, observable } from "mobx"

export class TodoStore {
  @observable showNameModal = false;
  @observable showAddressModal = false;
  @observable showTeamsModal = false;

  // @observable category = 'Name';


  @observable tempName = '';
  @observable Name = 'Suhail';

  @observable tempAddress = ['3591 fams ct'];
  @observable Address = ['3591 Fams Ct.', 'Levittown, NY 11756'];

  @observable tempTeams = ['3591 fams ct'];
  @observable Teams = ['Knicks', 'Spurs','Thunder'];









}

export default new TodoStore;