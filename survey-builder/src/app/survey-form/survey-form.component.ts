import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

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
      questionForms: this.formBuilder.array([]),
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
          answer: [questionForm.value['answerInputType']],
        })
      );
    } else {
      this.questionForms.push(
        this.formBuilder.group({
          question: [questionForm.value['questionBuilder']],
          answer: [questionForm.value['answerInputType']],
          choices: [questionForm.value['choices']],
        })
      );
    }
  }

  toggleFormBuilder() {
    this.showForm = !this.showForm;
  }
}
