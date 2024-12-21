import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isSignUp: boolean = false;
  user = {
    username: '',
    password: '',
  };
  message: string = '';
  isLoggedIn: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    // Check if a user session is saved in localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.user = JSON.parse(savedUser);
      this.isLoggedIn = true; // Mark the user as logged in
    }
  }

  toggleForm() {
    this.isSignUp = !this.isSignUp;
    this.clearForm();
  }

  onSignIn() {
    if (this.user.username.trim() === '' || this.user.password.trim() === '') {
      this.message = 'Please fill in all fields.';
      return;
    }

    this.userService.loginUser(this.user).subscribe((user) => {
      if (user) {
        this.message = 'Login successful!';

        // Save the user session in both localStorage and sessionStorage
        localStorage.setItem('user', JSON.stringify(this.user));
        sessionStorage.setItem('user', JSON.stringify(this.user));

        this.isLoggedIn = true; // Mark the user as logged in
        this.router.navigate(['/']); // Redirect to home or another page after successful login
      } else {
        this.message = 'Invalid username or password.';
      }
    });
  }

  onRegister() {
    if (this.user.username.trim() === '' || this.user.password.trim() === '') {
      this.message = 'Please fill in all fields.';
      return;
    }

    this.userService.registerUser(this.user).subscribe(() => {
      this.message = 'Registration successful!';
      this.clearForm();
      this.isSignUp = false;
    });
  }

  signOut() {
    // Remove the user from both localStorage and sessionStorage on sign out
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    this.isLoggedIn = false;
    this.router.navigate(['/login']); // Redirect to login page or another page after logout
  }

  private clearForm() {
    this.user = { username: '', password: '' };
    this.message = '';
  }
}
