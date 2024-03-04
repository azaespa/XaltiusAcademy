import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});

  @Output() updateQuestion = new EventEmitter<FormGroup>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      questionBuilder: [''],
      answerInput: ['']
    });
  }

  onUpdateQuestion(question: FormGroup) {
    this.updateQuestion.emit(question);
  }
}
