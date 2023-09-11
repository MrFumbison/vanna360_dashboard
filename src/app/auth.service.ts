
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;

  constructor() {}

  login(username: string, password: string): boolean {
    // Simulate a successful login
    if (username === 'a' && password === '1') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    // Clear the user's authentication status
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    // Check if the user is authenticated
    return this.isLoggedIn;
  }

  setLoggedIn(status: boolean) {
    this.isLoggedIn = status;
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  
}
