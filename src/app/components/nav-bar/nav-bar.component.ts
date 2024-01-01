import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  @Output() onChangeTheme = new EventEmitter<void>();
  @Input() theme_mode: string = 'light_mode';

  changeTheme() {
    this.onChangeTheme.emit();
  }
}
