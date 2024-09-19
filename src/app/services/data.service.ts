import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: any = { personalDetails: {}, financialDetails: {} };

  constructor() {}
}
