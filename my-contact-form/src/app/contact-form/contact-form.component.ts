import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  success: boolean = false;

  formData = {
    name: '',
    email: '',
    message: '',
  };

  submitForm(form: any) {
    if (form.valid) {
      alert('Your message has been submitted!');
      this.success = true;
    }
  }
}
