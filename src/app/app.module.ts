import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'; // If you have routing
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { FinancialDetailsComponent } from './financial-details/financial-details.component';

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
  ], // Declare the AppComponent and any other components
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    RouterModule.forRoot(routes), // If routing is involved
  ],
  providers: [],
  bootstrap: [AppComponent], // Bootstraps the main AppComponent
})
export class AppModule {}
