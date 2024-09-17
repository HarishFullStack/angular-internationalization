import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-financial-details',
  templateUrl: './financial-details.component.html',
  styleUrl: './financial-details.component.scss',
})
export class FinancialDetailsComponent {
  constructor(private router: Router) {}

  back() {
    this.router.navigate(['/']);
  }
}
