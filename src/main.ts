import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Import your routes
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)], // Provide the routes here
}).catch(err => console.error(err));