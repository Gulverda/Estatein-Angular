import { Component } from '@angular/core';
import { PropertyService } from '../../services/property/property.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Property {
  id: any | string;
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
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './all-properties.component.html',
  styleUrls: ['./all-properties.component.css', '../featured-properties/featured-properties.component.css'],
})
export class AllPropertiesComponent {
  properties: Property[] = [];
  filteredProperties: Property[] = [];
  searchQuery: string = '';
  filters = {
    bedroom1: false,
    bedroom2: false,
    bedroom3: false,
    bathroom1: false,
    bathroom2: false,
  };

  constructor(private propertyService: PropertyService) {
    this.properties = this.propertyService.getAllProperties();
    this.filteredProperties = [...this.properties];
    console.log('All properties loaded:', this.properties);
  }

  // Apply the search and filter logic
  applyFilters() {
    this.filteredProperties = this.properties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        property.description.toLowerCase().includes(this.searchQuery.toLowerCase());

      const matchesBedroomFilter =
        (this.filters.bedroom1 && property.bedroom === 1) ||
        (this.filters.bedroom2 && property.bedroom === 2) ||
        (this.filters.bedroom3 && property.bedroom === 3) ||
        (!this.filters.bedroom1 && !this.filters.bedroom2 && !this.filters.bedroom3);

      const matchesBathroomFilter =
        (this.filters.bathroom1 && property.bathroom === 1) ||
        (this.filters.bathroom2 && property.bathroom === 2) ||
        (!this.filters.bathroom1 && !this.filters.bathroom2);

      return matchesSearch && matchesBedroomFilter && matchesBathroomFilter;
    });
  }
}
