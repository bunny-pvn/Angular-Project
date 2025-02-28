import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  imports: [CommonModule, FormsModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent {

  credentials = {
    username: '',
    password: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log("Login successful", this.credentials);
      form.reset();
    }
  }

  onForgotPassword() {
    alert('Redirect to Forgot Password page!');
  }
}
