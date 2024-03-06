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
  fbRadioForm: FormGroup = this.formBuilder.group({
    choiceA: ['', Validators.required],
    choiceB: ['', Validators.required],
    choiceC: ['', Validators.required],
    choiceD: ['', Validators.required],
  });

  @Output() createQuestionForm = new EventEmitter<FormGroup>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.fbForm = this.formBuilder.group({
      questionBuilder: ['', Validators.required],
      answerInputType: ['', Validators.required],
    });
  }

  onSetAnswers(radioForm: FormGroup) {
    if (radioForm.valid) {
      alert('VALID');
    } else {
      alert('INVALID');
    }
  }

  onCreateQuestionForm(questionForm: FormGroup) {
    if (questionForm.valid) {
      //Form cleanup
      if (questionForm.value['choices']) {
        questionForm.removeControl('choices');
      }

      //Conditional adding of new controls to the form
      if (questionForm.value['answerInputType'] == 'radio') {
        questionForm.addControl('choices', this.fbRadioForm);
      }

      this.createQuestionForm.emit(questionForm);
    } else {
      alert('WOW');
    }
  }
}
