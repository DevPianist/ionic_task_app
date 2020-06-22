import { Component } from "@angular/core";
import { TasksService } from "src/app/services/tasks.service";
import { Task } from "src/app/models/task.model";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  tasks: Task[] = [];
  constructor(
    public tasksService: TasksService,
    private router: Router,
    private alertController: AlertController
  ) {
    this.tasks = tasksService.tasks;
  }
  private async addTask() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "New task",
      // subHeader: "Subtitle",
      // message: "This is an alert message.",
      inputs: [
        {
          name: "title",
          type: "text",
          placeholder: "Name task",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel");
          },
        },
        {
          text: "Create",
          role: "create",
          handler: (data) => {
            if (data.title.length > 0) {
              this.tasksService.addTask(data.title);
            }
            return;
          },
        },
      ],
    });

    await alert.present();
    // this.router.navigateByUrl("tabs/tab1/add-task");
  }
}
