import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  isLoggedIn = false;
  user: any = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    // Subscribe to the currentUser$ observable to detect login state changes
    this.userService.currentUser$.subscribe((user) => {
      this.user = user;  // Set the user data from the service
      this.isLoggedIn = !!user;  // If user is not null, user is logged in
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  signOut() {
    this.userService.logoutUser();  // Log the user out
  }
}
