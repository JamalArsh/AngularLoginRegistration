import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formdata = {
    email: '',
    password: '',
  };
  submit = false;
  loading = false;
  errorMessage = '';
  onSubmit() {
    this.loading = true;
  }
}
