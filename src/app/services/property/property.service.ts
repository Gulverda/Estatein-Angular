import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private properties = [
    {
      id: 1,
      title: 'Seaside Serenity Villa',
      description: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.',
      bedroom: 4,
      bathroom: 3,
      price: '$550,000',
      imgUrl: 'assets/Featured1.png',
    },
    {
      id: 2,
      title: 'Metropolitan Haven',
      description: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views.',
      bedroom: 2,
      bathroom: 2,
      price: '$450,000',
      imgUrl: 'assets/Featured2.png',
    },
    {
      id: 3,
      title: 'Rustic Retreat Cottage',
      description: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community.',
      bedroom: 3,
      bathroom: 2.5,
      price: '$400,000',
      imgUrl: 'assets/Featured3.png',
    },
    {
      id: 4,
      title: 'Modern Urban Loft',
      description: 'A spacious and modern loft with 1-bedroom, 1-bathroom, and an open-concept layout.',
      bedroom: 1,
      bathroom: 1,
      price: '$300,000',
      imgUrl: 'assets/Featured4.png',
    },
    {
      id: 5,
      title: 'Countryside Estate',
      description: 'A luxurious estate with 5 bedrooms, 4 bathrooms, and sprawling green fields.',
      bedroom: 5,
      bathroom: 4,
      price: '$1,200,000',
      imgUrl: 'assets/Featured5.png',
    },
  ];

  getAllProperties() {
    return this.properties;
  }

  getPropertyById(id: number) {
    return this.properties.find((property) => property.id === id);
  }

}
