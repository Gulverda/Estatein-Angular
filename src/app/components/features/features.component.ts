import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [MatIconModule, MatCardModule], // Correctly import Angular Material modules here
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  features = [
    { icon: 'home', title: 'Find Your Dream Home', description: 'Description here.' },
    { icon: 'attach_money', title: 'Unlock Property Value', description: 'Description here.' },
    { icon: 'apartment', title: 'Effortless Property Management', description: 'Description here.' },
    { icon: 'lightbulb', title: 'Smart Investments', description: 'Description here.' },
  ];
}
