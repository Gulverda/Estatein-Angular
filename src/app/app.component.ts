import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FeaturedPropertiesComponent } from "./featured-properties/featured-properties.component";
import { ClientTestimonialsComponent } from "./components/client-testimonials/client-testimonials.component";
import { FaqSectionComponent } from "./components/faq-section/faq-section.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, FeaturedPropertiesComponent, ClientTestimonialsComponent, FaqSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'estatein-angular';
}
