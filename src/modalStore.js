import { computed, observable } from "mobx"

export class TodoStore {
  @observable name = 'Suhail'
}

export default new TodoStore