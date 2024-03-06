import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css'],
})
export class SurveyFormComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});
  newForm: FormGroup = new FormGroup({})
  
  showForm: boolean = true;
  
  constructor(private formBuilder: FormBuilder) {}

  //form array
  //inside of it will be the form group populated by fb component
  //will then be generated to survey form by ngfor
  ngOnInit(): void {}

  surveyForm: FormGroup = this.formBuilder.group({
    questionForms: this.formBuilder.array([]),
  });

  get questionForms() {
    return this.surveyForm.controls['questionForms'] as FormArray;
  }

  createQuestionForm(questionForm: FormGroup) {
    if(!questionForm.value['choices']) {
      this.newForm = this.formBuilder.group({
        "question": [questionForm.value['questionBuilder']],
        "answer": [questionForm.value['answerInputType']],
      })
    } 
    else {
      this.newForm = this.formBuilder.group({
        "question": [questionForm.value['questionBuilder']],
        "answer": [questionForm.value['answerInputType']],
        "choices": [questionForm.value['choices']],
      })
    }
    this.questionForms.push(this.newForm);
  }

  onSubmit() {
    if (this.myForm.valid) {
      alert('VALID');
    } else {
      alert('INVALID');
    }
  }

  showFormBuilder() {
    this.showForm = !this.showForm;
  }
}
