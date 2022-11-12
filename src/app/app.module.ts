import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { HttpService } from "./http.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailTaskComponent } from './detail-task/detail-task.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailTaskComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
