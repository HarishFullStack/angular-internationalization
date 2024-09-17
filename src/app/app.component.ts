import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-internationalization';

  constructor(private translate: TranslateService) {
    // Set default language to English
    translate.setDefaultLang('en');

    // Optionally detect browser language and set it as default
    const browserLang = translate.getBrowserLang();
    translate.use(
      browserLang && browserLang.match(/en|fr/) ? browserLang : 'en'
    );
  }

  // Method to switch language
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
