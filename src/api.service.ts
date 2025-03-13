import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const SERVICES = [
  { provider: 'bank', name: 'Кредит' },
  { provider: 'bank', name: 'Лизинг' },
  { provider: 'partner', name: 'Страхование', price: 776 },
  { provider: 'partner', name: 'Консалтинг', price: 72 },
];

@Injectable({ providedIn: 'root' })
export class ApiService {
  services = of(SERVICES);
}
