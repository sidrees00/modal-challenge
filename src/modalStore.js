import { computed, observable } from "mobx"

export class TodoStore {
  @observable name = 'Suhail'
  @observable showModal = false
}

export default new TodoStore