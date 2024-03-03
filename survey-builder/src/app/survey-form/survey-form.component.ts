import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css'],
})
export class SurveyFormComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      answerText: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      alert('VALID');
    } else {
      alert('INVALID');
    }
  }
}
