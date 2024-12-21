import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true, // Ensure the component is marked as standalone
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  imports: [CommonModule], // Import CommonModule for ngFor and other directives
})
export class AboutUsComponent {
  teamMembers = [
    { name: 'Max Mitchell', role: 'Founder', imageUrl: 'assets/MaxMitchell.png' },
    { name: 'Sarah Johnson', role: 'Chief Real Estate Officer', imageUrl: 'assets/SarahJohnson.png' },
    { name: 'David Brown', role: 'Head of Property management', imageUrl: 'assets/DavidBrown.png' },
    { name: 'Michael Turner', role: 'Legal Counsel', imageUrl: 'assets/MichaelTurner.png' },
  ];
}
