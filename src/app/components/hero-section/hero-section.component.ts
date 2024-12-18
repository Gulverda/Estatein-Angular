import { Component } from '@angular/core';
import { FeaturesComponent } from '../features/features.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [FeaturesComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

}
