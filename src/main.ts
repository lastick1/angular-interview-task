import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ServicesFormComponent } from './services-form/services-form.component';


@Component({
  selector: 'app-root',
  template: `
    <app-services-form></app-services-form>
  `,
  imports: [ServicesFormComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
