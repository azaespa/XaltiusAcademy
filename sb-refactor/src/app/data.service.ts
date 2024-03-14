import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public data = new Subject<any>();
  public questionForm = new Subject<FormGroup>();
  public editQuestionForm = new Subject<boolean>();

  constructor() {}

  sendData(_data: any) {
    this.data.next(_data);
  }

  editForm(_editQuestionForm: boolean) {
    this.editQuestionForm.next(_editQuestionForm);
  }

  sendForm(_questionForm: FormGroup) {
    this.questionForm.next(_questionForm);
  }
}
