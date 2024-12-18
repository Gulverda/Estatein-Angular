import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.css'],
})
export class FaqSectionComponent {
  faqs = [
    {
      question: 'How do I search for properties on Estatein?',
      answer:
        'Learn how to use our user-friendly search tools to find properties that match your criteria.',
    },
    {
      question: 'What documents do I need to sell my property through Estatein?',
      answer:
        'Find out about the necessary documentation for listing your property with us.',
    },
    {
      question: 'How can I contact an Estatein agent?',
      answer:
        'Discover the different ways you can get in touch with our experienced agents.',
    },
  ];
}
