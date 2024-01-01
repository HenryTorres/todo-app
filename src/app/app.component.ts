import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ThemeService } from './services/theme.service';
import { TypeTheme } from './interfaces/my-theme/itheme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  modeThemeText: string = '';
  title = 'todo-app';

  constructor(private readonly themeService: ThemeService) {
    const mytheme = this.themeService.getThemeLocalStorage();
    this.themeService.setTheme(mytheme);
    this.modeThemeText = this.setModeTheme(mytheme);
  }

  onChangeTheme() {
    let myTheme = this.themeService.getThemeLocalStorage()
    myTheme = (myTheme == TypeTheme.light) ? TypeTheme.dark : TypeTheme.light;
    this.themeService.setTheme(myTheme);
    this.modeThemeText = this.setModeTheme(myTheme);
  }

  private setModeTheme(myTheme: string): string {
    if (myTheme == TypeTheme.light) {
      return 'dark_mode';
    } else {
      return 'light_mode';
    }
  }
}
