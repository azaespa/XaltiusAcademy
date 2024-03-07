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
      questionForms: this.formBuilder.array([], this.customValidator()),
    });
  }

  get questionForms() {
    return this.surveyForm.controls['questionForms'] as FormArray;
  }

  createQuestionForm(questionForm: FormGroup) {
    if (!questionForm.value['choices']) {
      this.questionForms.push(
        this.formBuilder.group({
          question: [questionForm.value['questionBuilder']],
          answer: ['', Validators.required],
          answerInputType: [questionForm.value['answerInputType']],
        })
      );
    } else {
      this.questionForms.push(
        this.formBuilder.group({
          question: [questionForm.value['questionBuilder']],
          answer: [''],
          answerInputType: [questionForm.value['answerInputType']],
          choices: [questionForm.value['choices'], Validators.required],
        })
      );
    }
  }

  customValidator(): ValidatorFn {
    return Validators.required;
  }

  formTest() {
    console.log(
      this.questionForms.controls.findIndex((fg) => fg.invalid) === -1
    );
  }

  toggleFormBuilder() {
    this.showForm = !this.showForm;
  }
}
