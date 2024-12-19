import { Component } from '@angular/core';
import { FeaturesComponent } from '../../components/features/features.component';
import { FeaturedPropertiesComponent as FeaturedPropertiesComponent } from "../../components/featured-properties/featured-properties.component";
import { ClientTestimonialsComponent as ClientTestimonialsComponent } from "../../components/client-testimonials/client-testimonials.component";
import { FaqSectionComponent as FaqSectionComponent } from "../../components/faq-section/faq-section.component";


@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [FeaturesComponent, FeaturedPropertiesComponent, ClientTestimonialsComponent, FaqSectionComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

}
