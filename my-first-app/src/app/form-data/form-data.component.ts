import { Component } from '@angular/core';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css'],
})
export class FormDataComponent {
  formData = {
    value1: '',
    value2: '',
    result: '',
  };

  submitForm(form: any) {
    if (form.valid) {
      alert(this.formData.value1);
      alert(this.formData.value2);
      let value1: number = parseInt(this.formData.value1);
      let value2: number = parseInt(this.formData.value2);
      let total: number = value1 + value2;
      this.formData.result = total.toString();
      alert(this.formData.result);
    }
  }
}
