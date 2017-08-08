import { computed, observable } from "mobx"

export class TodoStore {
  @observable showNameModal = false;
  @observable showAddressModal = false;
  @observable showTeamsModal = false;

  // @observable category = 'Name';

  @observable input = '';

  @observable tempName = '';
  @observable Name = 'Suhail';

  @observable tempAddress = [];
  @observable Address = ['3591 Fams Ct.', 'Levittown, NY 11756'];

  @observable tempTeams = '';
  @observable Teams = [];









}

export default new TodoStore;