export class ITask {
  _id!: string;
  name!: string;
  description!: string;
  status!: boolean;
  deadline!: any;
}

export class IReturnData {
  data!: Array<ITask>;
  status!: Number;
}
