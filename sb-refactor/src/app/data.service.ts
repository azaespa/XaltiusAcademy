import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public data = new Subject<any>();
  public questionForm = new Subject<FormGroup>();

  constructor() {}

  sendData(_data: any) {
    this.data.next(_data);
  }

  sendForm(_questionForm: FormGroup) {
    this.questionForm.next(_questionForm);
  }
}
