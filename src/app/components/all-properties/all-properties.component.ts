import { Component } from '@angular/core';
import { PropertyService } from '../../services/property/property.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Property {
  id: any|string;
  title: string;
  description: string;
  bedroom: number;
  bathroom: number;
  price: string;
  imgUrl: string;
}

@Component({
  selector: 'app-all-properties',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './all-properties.component.html',
  styleUrls: ['./all-properties.component.css'],
})
export class AllPropertiesComponent {
  properties: Property[] = [];

  constructor(private propertyService: PropertyService) {
    this.properties = this.propertyService.getAllProperties();
    console.log('All properties loaded:', this.properties);
  }
}
