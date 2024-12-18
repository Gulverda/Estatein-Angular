import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-client-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-testimonials.component.html',
  styleUrls: ['./client-testimonials.component.css'],
})
export class ClientTestimonialsComponent {
  reviews = [
    {
      stars: [1, 2, 3, 4, 5],
      title: 'Exceptional Service!',
      comment:
        'Our experience with Estatein was outstanding. Their team’s dedication made finding our dream home a breeze.',
      name: 'Wade Warren',
      location: 'USA, California',
      avatar: 'assets/user1.png',
    },
    {
      stars: [1, 2, 3, 4, 5],
      title: 'Efficient and Reliable',
      comment:
        'Estatein provided us with top-notch service. They helped us sell quickly at a great price.',
      name: 'Emelie Thomson',
      location: 'USA, Florida',
      avatar: 'assets/user2.png',
    },
    {
      stars: [1, 2, 3, 4, 5],
      title: 'Trusted Advisors',
      comment:
        'The Estatein team guided us through the entire buying process. Thank you for your support!',
      name: 'John Mans',
      location: 'USA, Nevada',
      avatar: 'assets/user3.png',
    },
  ];
}
