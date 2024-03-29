import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent implements OnInit {
  fbForm: FormGroup = this.formBuilder.group({
    questionBuilder: ['', Validators.required],
    answerInputType: ['', Validators.required],
    required: [false, Validators.required],
    minlength: ['0', Validators.required],
  });
  fbRadioForm: FormGroup = this.formBuilder.group({
    choiceA: ['', Validators.required],
    choiceB: ['', Validators.required],
    choiceC: ['', Validators.required],
    choiceD: ['', Validators.required],
  });
  fbRatingForm: FormGroup = this.formBuilder.group({
    choice1: ['1'],
    choice2: ['2'],
    choice3: ['3'],
    choice4: ['4'],
    choice5: ['5'],
  });

  isChecked: boolean = false;

  @Input() editQuestionForm: boolean = false;
  @Input() questionFormToBeEdited: FormGroup = new FormGroup({});
  @Output() createQuestionForm = new EventEmitter<FormGroup>();

  constructor(private formBuilder: FormBuilder) {
    this.fbForm.controls['answerInputType'].valueChanges.subscribe(
      (inputType) => {
        if (inputType == 'text') {
          this.fbForm.removeControl('choices');
        } else if (inputType == 'rating') {
          this.fbForm.removeControl('choices');
          this.fbForm.addControl('choices', this.fbRatingForm);
        } else {
          this.fbForm.removeControl('choices');
          this.fbForm.addControl('choices', this.fbRadioForm);
        }
      }
    );
  }

  ngOnInit(): void {}

  isCheckedEdit(type: string): boolean {
    return this.questionFormToBeEdited.value['answerInputType'] == type
      ? true
      : false;
  }

  onCreateQuestionForm(questionForm: FormGroup) {
    if (questionForm.valid) {
      this.createQuestionForm.emit(questionForm);
    } else {
      alert('INVALID');
    }
  }
}
