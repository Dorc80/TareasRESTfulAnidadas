import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Tarea, TareaResponse, TareasResponse } from './model/tareasResponse';

const { urlBase } = environment;

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
  }

  getTasks() {
    return this._http.get<TareasResponse>(urlBase + '/tareas');
  }

  getTask(id: string) {
    return this._http.get<TareaResponse>(`${urlBase}/tareas/${id}`);
  }

  deleteTask(id: String) {
    return this._http.delete(`${urlBase}/tareas/${id}`);
  }

}
