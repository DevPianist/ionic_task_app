import { Injectable } from "@angular/core";
import { Task } from "../models/task.model";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  tasks: Task[] = [];

  constructor() {}
  addTask(title: string) {
    const task = new Task(title);
    this.tasks.push(task);
  }
}
