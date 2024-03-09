import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css'],
})
export class SurveyFormComponent implements OnInit {
  surveyForm: FormGroup = new FormGroup({});

  showForm: boolean = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.surveyForm = this.formBuilder.group({
      questionForms: this.formBuilder.array([], Validators.required),
    });
  }

  get questionForms(): FormArray {
    return this.surveyForm.controls['questionForms'] as FormArray;
  }

  createQuestionForm(questionForm: FormGroup) {
    if (questionForm.value['answerInputType'] === 'text') {
      this.questionForms.push(
        this.formBuilder.group({
          question: [questionForm.value['questionBuilder']],
          answer: ['', this.setValidators(questionForm)],
          answerInputType: [questionForm.value['answerInputType']],
        })
      );
    } else {
      this.questionForms.push(
        this.formBuilder.group({
          question: [questionForm.value['questionBuilder']],
          answer: ['', this.setValidators(questionForm)],
          answerInputType: [questionForm.value['answerInputType']],
          choices: [questionForm.value['choices']],
        })
      );
    }
  }

  formTest() {
    if (this.questionForms.valid) {
      alert('QF VALID');
    } else {
      alert('QF INVALID');
    }
  }

  setValidators(questionForm: FormGroup) {
    let validators: any = [];
    if (questionForm.value['required']) {
      validators.push(Validators.required);
      validators.push(Validators.minLength(questionForm.value['minlength']));
    } else {
      validators.push(Validators.minLength(questionForm.value['minlength']));
    }
    return validators;
  }

  toggleFormBuilder() {
    this.showForm = !this.showForm;
  }
}
