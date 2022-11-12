import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Tarea } from '../model/tareasResponse';
import { Input } from "@angular/core";

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.css']
})
export class DetailTaskComponent implements OnInit {

  @Input() tarea: Tarea;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
  }

}
