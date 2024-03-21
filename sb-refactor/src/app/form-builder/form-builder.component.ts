import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent implements OnInit {
  surveyForm: FormGroup = new FormGroup({});

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.surveyForm = this.formBuilder.group({
      questionForms: this.formBuilder.array([
        this.formBuilder.group({
          id: [new Date().getTime() + Math.random()],
          question: [''],
          answerType: ['text'],
        }),
      ]),
    });
  }

  get questionForms(): FormArray {
    return this.surveyForm.controls['questionForms'] as FormArray;
  }

  createMcForm() {
    this.questionForms.push(
      this.formBuilder.group({
        id: [new Date().getTime() + Math.random()],
        question: [''],
        answerType: ['multipleChoice'],
        choices: this.formBuilder.group({
          choiceA: [''],
          choiceB: [''],
          choiceC: [''],
          choiceD: [''],
        }),
      })
    );
  }

  createTextForm() {
    this.questionForms.push(
      this.formBuilder.group({
        id: [new Date().getTime() + Math.random()],
        question: [''],
        answerType: ['text'],
      })
    );
  }

  sendForm() {
    this.dataService.sendForm(this.surveyForm);
  }
}
