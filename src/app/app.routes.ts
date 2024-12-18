import { Routes } from '@angular/router';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

export const routes: Routes = [
  { path: '', component: HeroSectionComponent }, // Home Route
  { path: 'about-us', component: AboutUsComponent },
];
