import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppTodolistComponent } from './app-todolist/app-todolist.component';
import {FormsModule} from '@angular/forms';

import {StorageService} from './storage.service';

@NgModule({
  declarations: [
    AppComponent,
    AppTodolistComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
