import { observable } from "mobx"

export class TodoStore {
  @observable showNameModal = false;
  @observable showAddressModal = false;
  @observable showTeamsModal = false;

  // @observable category = 'Name';

  @observable input = '';

  @observable tempName = '';
  @observable Name = 'Suhail Idrees';

  @observable tempAddress = [];
  @observable Address = ['1600 Pennsylvania Ave', 'Washington, DC 20500'];

  @observable tempTeams = '';
  @observable Teams = [];

}

export default new TodoStore;