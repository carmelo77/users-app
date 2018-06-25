export class User {

  constructor(
    public _id: number = Math.floor(Math.random() * 100),
    public firstname: string = "",
    public lastname: string = "",
    public email: string = "",
    public editable: boolean = false
  ) {

  }
}
