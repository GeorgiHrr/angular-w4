import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

export const appConfig = {
  providers: [provideRouter([])]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

