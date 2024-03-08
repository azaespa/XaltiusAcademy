import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent implements OnInit {
  fbForm: FormGroup = this.formBuilder.group({
    questionBuilder: ['', Validators.required],
    answerInputType: ['', Validators.required],
  });
  fbRadioForm: FormGroup = this.formBuilder.group({
    choiceA: ['', Validators.required],
    choiceB: ['', Validators.required],
    choiceC: ['', Validators.required],
    choiceD: ['', Validators.required],
  });

  @Output() createQuestionForm = new EventEmitter<FormGroup>();

  constructor(private formBuilder: FormBuilder) {
    this.fbForm.controls['answerInputType'].valueChanges.subscribe(
      (inputType) => {
        if (inputType == 'text') {
          this.fbForm.removeControl('choices');
        } else {
          this.fbForm.addControl('choices', this.fbRadioForm);
        }
      }
    );
  }

  ngOnInit(): void {}

  onCreateQuestionForm(questionForm: FormGroup) {
    if (questionForm.valid) {
      this.createQuestionForm.emit(questionForm);
    } else {
      alert('INVALID');
    }
  }
}
