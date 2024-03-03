import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-component-form',
  templateUrl: './component-form.component.html',
  styleUrls: ['./component-form.component.css'],
})
export class ComponentFormComponent implements OnInit {
  //Create a form group

  myForm: FormGroup = new FormGroup({});

  submissionResult: string = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      occupation: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.submissionResult = 'VALID';
      console.log(this.myForm.value);
      const occupation = this.myForm.value.occupation;
      console.log(occupation);
    } else {
      alert('invalid!');
    }
  }
}
