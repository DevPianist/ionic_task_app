import { Subtask } from "./subtask.model";

export class Task {
  id: number;
  title: string;
  createdAt: Date;
  finishedIn: Date;
  finished: boolean;
  subtasks: Subtask[];
  constructor(title: string) {
    this.title = title;
    this.createdAt = new Date();
    this.finished = false;
    this.subtasks = [];
    this.id = new Date().getTime();
  }
}
