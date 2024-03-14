import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent implements OnInit {
  question: string = '';
  editQuestionForm: boolean = false;

  questionForm: FormGroup = new FormGroup({});
  choicesForm: FormGroup = new FormGroup({});

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.questionForm = this.formBuilder.group({
      question: [''],
      answerType: [''],
    });

    this.choicesForm = this.formBuilder.group({
      choiceA: [''],
      choiceB: [''],
      choiceC: [''],
      choiceD: [''],
    });

    this.questionForm.controls['answerType'].valueChanges.subscribe(
      (answerTypeVal) => {
        if (answerTypeVal == 'text') {
          this.questionForm.removeControl('choices');
        } else if (answerTypeVal == 'multiple-choice') {
          this.questionForm.addControl('choices', this.choicesForm);
        }
      }
    );

    this.dataService.editQuestionForm.subscribe({
      next: (editQuestionFormVal) => {
        this.editQuestionForm = editQuestionFormVal;
        console.log(this.editQuestionForm);
      },
    });
  }

  sendForm() {
    this.dataService.sendForm(this.questionForm);
  }
}
