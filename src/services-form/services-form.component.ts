import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class ServicesFormComponent {
  api = inject(ApiService);
  fb = inject(FormBuilder);
}
