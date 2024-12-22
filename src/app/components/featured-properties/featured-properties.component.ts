import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-featured-properties',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './featured-properties.component.html',
  styleUrls: ['./featured-properties.component.css'],
})
export class FeaturedPropertiesComponent {
  properties = [
    {
      title: 'Seaside Serenity Villa',
      description:
        'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.',
      bedroom: 4,
      bathroom: 3,
      price: '$550,000',
      imgUrl: 'assets/Featured1.png',
    },
    {
      title: 'Metropolitan Haven',
      description:
        'A chic and fully-furnished 2-bedroom apartment with panoramic city views.',
      bedroom: 2,
      bathroom: 2,
      price: '$550,000',
      imgUrl: 'assets/Featured2.png', 
    },
    {
      title: 'Rustic Retreat Cottage',
      description:
        'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community.',
      bedroom: 3,
      bathroom: 3,
      price: '$550,000',
      imgUrl: 'assets/Featured3.png', 
    },
  ];
}
