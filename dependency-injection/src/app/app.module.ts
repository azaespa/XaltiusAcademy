import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { FromComponent } from './from/from.component';
import { ToComponent } from './to/to.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [AppComponent, EmployeeComponent, FromComponent, ToComponent],
  imports: [BrowserModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
