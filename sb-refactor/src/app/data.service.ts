import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public data = new Subject<any>();
  public surveyForm = new Subject<FormGroup>();

  constructor() {}

  sendData(_data: any) {
    this.data.next(_data);
  }

  sendForm(_surveyForm: FormGroup) {
    this.surveyForm.next(_surveyForm);
  }
}
