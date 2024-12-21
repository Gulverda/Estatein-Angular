import { Routes } from '@angular/router';
import { HeroSectionComponent } from './pages/hero-section/hero-section.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LoginComponent } from './pages/login/login.component'; // Import the LoginComponent


export const routes: Routes = [
  { path: '', component: HeroSectionComponent }, // Home Route
  { path: 'about-us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent }, // Login Route
];
