import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = [
    {
      username: 'john_doe',
      password: 'password123',
      email: 'john.doe@example.com',
    },
    {
      username: 'jane_smith',
      password: 'mypassword',
      email: 'jane.smith@example.com',
    },
  ];

  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  currentUser$ = this.currentUserSubject.asObservable();  // Observable for tracking user login state

  constructor() {
    // Check if user data is available in localStorage and update the current user
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }

    // Check if users are saved in localStorage and update the user list
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }
  }

  // Login user
  loginUser(user: any): Observable<any> {
    const foundUser = this.users.find(
      (u) => u.username === user.username && u.password === user.password
    );
    if (foundUser) {
      // Save user data in localStorage to persist session
      localStorage.setItem('user', JSON.stringify(foundUser));
      this.currentUserSubject.next(foundUser); // Set the logged-in user
      return new Observable(observer => observer.next(foundUser)); // Emit the logged-in user
    } else {
      return new Observable(observer => observer.next(null)); // Emit null if login fails
    }
  }

  // Logout user
  logoutUser(): void {
    localStorage.removeItem('user'); // Remove user data from localStorage
    this.currentUserSubject.next(null); // Set the current user to null (logged out)
  }

  // Get the current logged-in user
  getCurrentUser(): Observable<any> {
    return this.currentUser$; // Return the observable to get the user data
  }

  // Register a new user
  registerUser(user: any): Observable<any> {
    this.users.push(user); // Add the new user to the array

    // Persist the updated users list in localStorage
    localStorage.setItem('users', JSON.stringify(this.users));

    return new Observable(observer => observer.next(user)); // Emit the added user
  }
}
