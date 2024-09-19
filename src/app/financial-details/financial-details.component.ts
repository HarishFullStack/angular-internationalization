import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-financial-details',
  templateUrl: './financial-details.component.html',
  styleUrl: './financial-details.component.scss',
})
export class FinancialDetailsComponent {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dataService: DataService
  ) {}

  financialForm: FormGroup;

  ngOnInit() {
    this.financialForm = this.fb.group({
      revenue: [0],
    });

    this.financialForm.patchValue({
      revenue: this.dataService.data.financialDetails.revenue,
    });
  }

  back() {
    this.dataService.data.financialDetails = {
      revenue: this.financialForm.controls['revenue'].value,
    };
    this.router.navigate(['/']);
  }
}
