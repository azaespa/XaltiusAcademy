import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  Form,
} from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent implements OnInit {
  fbForm: FormGroup = new FormGroup({});
  fbTextForm: FormGroup = this.formBuilder.group({
    questionBuilder: [''],
    answerInputType: [''],
  });
  fbRadioForm: FormGroup = this.formBuilder.group({
    questionBuilder: [''],
    answerInputType: [''],
    choices: this.formBuilder.group({
      choiceA: [''],
      choiceB: [''],
      choiceC: [''],
      choiceD: [''],
    }),
  });

  @Output() updateQuestion = new EventEmitter<FormGroup>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.fbForm = this.formBuilder.group({
      questionBuilder: [''],
      answerInputType: ['', Validators.required],
    });
  }

  onSetAnswers() {
    console.log(this.fbRadioForm);
  }

  onUpdateQuestion(question: FormGroup) {
    if(question.valid) {
      this.updateQuestion.emit(question);
    } else {
      alert("WOW")
    }
  }
}
