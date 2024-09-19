import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('langSelect') dropdown: MatSelect;
  flagCode: string = '';

  title = 'angular-internationalization';
  languageOptions: any[] = [
    {
      icon: 'gb',
      name: 'English',
      value: 'en',
    },
    {
      icon: 'fr',
      name: 'Français',
      value: 'fr',
    },
  ];

  constructor(private translate: TranslateService) {
    // Set default language to English
    translate.setDefaultLang('en');
    this.setFlagCode('en');

    // Optionally detect browser language and set it as default
    const browserLang = translate.getBrowserLang();
    translate.use(
      browserLang && browserLang.match(/en|fr/) ? browserLang : 'en'
    );
  }

  // ngAfterViewInit(): void {
  //   this.dropdown.value = 'en';
  // }

  // Method to switch language
  switchLanguage(language: string) {
    this.translate.use(language);
    this.setFlagCode(language);
  }

  setFlagCode(language: string) {
    this.flagCode = this.languageOptions.find((x) => x.value === language).icon;
  }
}
