import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormArray, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css'],
})
export class SurveyFormComponent implements OnInit {
  question: string = 'test';
  answerType: string = '';
  editQuestionForm: boolean = false;

  surveyForm: FormGroup = new FormGroup({});

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.surveyForm = this.formBuilder.group({
      questionForms: this.formBuilder.array([]),
    });
    this.dataService.questionForm.subscribe({
      next: (dataValue) => {
        // this.question = dataValue.value['question'];
        // this.answerType = dataValue.value['answerType'];
        this.questionForms.push(
          this.formBuilder.group({
            question: dataValue.value['question'],
            answerType: dataValue.value['answerType'],
            choices: dataValue.value['choices'],
          })
        );
      },
    });
  }

  get questionForms(): FormArray {
    return this.surveyForm.controls['questionForms'] as FormArray;
  }

  editForm(qf: AbstractControl) {
    this.dataService.editForm(qf as FormGroup);
  }
}
