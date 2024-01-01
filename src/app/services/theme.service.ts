import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { IThemeProperties, TypeTheme } from '../interfaces/my-theme/itheme';
import { THEMES } from '../interfaces/my-theme/itheme-config';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  getThemeLocalStorage(): string {
    return localStorage.getItem('myTheme') || TypeTheme.dark;
  }

  setThemeLocalStorage(value: string) {
    return localStorage.setItem('myTheme', value);
  }

  setTheme(name: string): void {
    localStorage.setItem('myTheme', name);

    const theme: IThemeProperties = (THEMES as any)[name];
    Object.keys(theme).forEach(key => {
      this.document.documentElement.style.setProperty(
        '--' + key,
        (theme as any)[key]
      )
    });
  }

}
