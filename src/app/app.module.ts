import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DateGridComponent } from './date-grid/date-grid.component';
import { TodoSideBarComponent } from './todo-side-bar/todo-side-bar.component';
import { FormsModule } from "@angular/forms";
import { FocusElementDirective } from './focus-element.directive';
import { DateMonthNamePipe } from './date-month-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DateGridComponent,
    TodoSideBarComponent,
    FocusElementDirective,
    DateMonthNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
