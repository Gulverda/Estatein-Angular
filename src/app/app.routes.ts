import { Routes } from '@angular/router';
import { HeroSectionComponent } from './pages/hero-section/hero-section.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LoginComponent } from './pages/login/login.component';
import { AllPropertiesComponent } from './components/all-properties/all-properties.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';



export const routes: Routes = [
  { path: '', component: HeroSectionComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'all-properties', component: AllPropertiesComponent },
  { path: 'property/:id', component: PropertyDetailComponent },
];
