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
  
  answerInput: string = 'text';
  question: string = 'If this is a question, what is your answer?';

  users: string[] = ['a', 'a', 'a'];

  constructor(private formBuilder: FormBuilder) {}

  //form array
  //inside of it will be the form group populated by fb component
  //will then be generated to survey form by ngfor
  ngOnInit(): void {}

  surveyForm: FormGroup = this.formBuilder.group({
    questions: this.formBuilder.array([]),
  });

  get questions() {
    return this.surveyForm.controls['questions'] as FormArray;
  }

  addQuestion(question: FormGroup) {
    this.newForm = this.formBuilder.group({
      "question": [question.value['questionBuilder']],
      "answer": [question.value['answerInputType']]
    })
    this.questions.push(this.newForm);
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

  updateQuestion(question: FormGroup) {
    this.question = question.value.questionBuilder;
    this.answerInput = question.value.answerInput;
  }
}
