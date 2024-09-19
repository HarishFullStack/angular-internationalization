import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'; // If you have routing
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { FinancialDetailsComponent } from './financial-details/financial-details.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DataService } from './services/data.service';
import { MatCard } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatOption, MatSelect } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const routes: Routes = [
  // Define your app routes here
  { path: '', component: PersonalDetailsComponent },
  { path: 'financial', component: FinancialDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    FinancialDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCard,
    MatButton,
    MatSelect,
    MatOption,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    RouterModule.forRoot(routes), // If routing is involved
  ],
  providers: [DataService],
  bootstrap: [AppComponent], // Bootstraps the main AppComponent
})
export class AppModule {}
