import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilderComponent } from './survey-form/form-builder/form-builder.component';

@NgModule({
  declarations: [AppComponent, SurveyFormComponent, FormBuilderComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
