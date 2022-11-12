import { Component } from '@angular/core';
import { HttpService } from "./http.service";
import { Tarea } from './model/tareasResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  tareas: Array<Tarea>;
  tarea: Tarea;

  constructor(private _http: HttpService) { }

  getTasks() {

    this._http.getTasks().subscribe(resp => {

      let tareas = resp && resp.tareas ? resp.tareas : [];
      if (tareas.length > 0) {

        this.tareas = resp.tareas;

      }

    })

  }

  clickAllTaskBtn() {
    this.getTasks();
  }

  clickTaskBtn(id: string) {
    this.getTaskById(id);
  }

  getTaskById(id: string) {

    this._http.getTask(id).subscribe(resp => {
      this.tarea = resp.tarea;
    });

  }

}
