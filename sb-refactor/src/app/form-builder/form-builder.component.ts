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

  questionForm: FormGroup = new FormGroup({});

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.questionForm = this.formBuilder.group({
      question: [''],
    });
  }

  sendForm() {
    this.dataService.sendForm(this.questionForm);
  }
}
