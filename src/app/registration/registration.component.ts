import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from '@angular/router';

interface User {
  username: string;
  email: string;
  phonenumber: string;
  password: string;
}

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  providers: [ApiService],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  showLogin = false;
  isRegistration: boolean = true;
  loggedIn: boolean = false;
  users: User[] = [];
  user: User = { email: '', password: '', username: '', phonenumber: '' };

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private apiService = inject(ApiService);

  signupForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phonenumber: ['', Validators.required],
    password: ['', Validators.required],
  });

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSignup() {
    if (this.signupForm.valid) {
      const userData: User = {
        username: this.signupForm.value.username || '',
        email: this.signupForm.value.email || '',
        phonenumber: this.signupForm.value.phonenumber || '',
        password: this.signupForm.value.password || ''
      };

      this.apiService.signup(userData).subscribe({
        next: (response) => {
          alert('Signup successful!');
          this.showLogin = true;
        },
        error: (error) => {
          alert('Signup failed! ' + error.message);
        }
      });
    }
  }

  onLogin() {
    if (this.loginForm.valid) {
      const credentials = {
        email: this.loginForm.value.email || '',
        password: this.loginForm.value.password || ''
      };

      this.apiService.login(credentials).subscribe({
        next: (response) => {
          alert('Login successful!');
          this.loggedIn = true;
          this.router.navigate(['/head']);
        },
        error: (error) => {
          alert('Login failed! ' + error.message);
        }
      });
    }
  }


}
