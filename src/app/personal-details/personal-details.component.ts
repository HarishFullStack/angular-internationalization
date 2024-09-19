import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.scss',
})
export class PersonalDetailsComponent {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dataService: DataService
  ) {}

  personalForm: FormGroup;

  ngOnInit() {
    this.personalForm = this.fb.group({
      firstName: [''],
      lastName: [''],
    });

    this.personalForm.patchValue({
      firstName: this.dataService.data.personalDetails.firstName,
      lastName: this.dataService.data.personalDetails.lastName,
    });
  }

  next() {
    this.dataService.data.personalDetails = {
      firstName: this.personalForm.controls['firstName'].value,
      lastName: this.personalForm.controls['lastName'].value,
    };
    this.router.navigate(['/financial']);
  }
}
