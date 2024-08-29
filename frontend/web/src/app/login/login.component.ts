import { Component } from '@angular/core';
import { LoginRequest } from '../login-request.model';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginRequest: LoginRequest = { email: '', password: '' };

  constructor(private userService: UserService, private router: Router) { }

  login() {
    this.userService.login(this.loginRequest).subscribe({
      next: (response) => {
        console.log('Login successful. User ID:', response);
        this.router.navigate(['/stocks']);
      },
      error: (error) => {
        console.error('Error logging in:', error);
        // Optionally, show an error message or handle the error
      }
    });
  }

  navigateToFeature(feature: string) {
    // Navigate to the route based on the feature parameter
    this.router.navigate([`/${feature}`]);
 
}
  
}
