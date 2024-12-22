import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../services/property/property.service';
import { CommonModule } from '@angular/common';

interface Property {
  id: number;
  title: string;
  description: string;
  bedroom: number;
  bathroom: number;
  price: string;
  imgUrl: string;
}

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
})
export class PropertyDetailComponent implements OnInit {
  property: Property | undefined;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService
  ) {}

  ngOnInit(): void {
    const propertyId = Number(this.route.snapshot.paramMap.get('id'));
    this.property = this.propertyService.getPropertyById(propertyId);

    if (this.property) {
      console.log('Property details loaded:', this.property);
    } else {
      console.error('Property not found');
    }
  }
}
