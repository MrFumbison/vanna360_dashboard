
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}


  onSubmit() {
    // Attempt to log in using the AuthService
    const loggedIn = this.authService.login(this.username, this.password);

    // Check if login was successful
    if (loggedIn) {
      // Clear the form and reset error state
      this.username = '';
      this.password = '';
      this.loginError = false;

      this.authService.setLoggedIn(true);
      this.router.navigate(['/all_shops']);
    } else {
      // Display an error message
      this.loginError = true;
    }
  }

  logout() {
    // Log the user out using the AuthService
    this.authService.logout();
  }
}
