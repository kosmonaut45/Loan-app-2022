import { Component, Input } from '@angular/core';
import { MenuItem } from '../common/menu-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent {
  @Input() menuItems: MenuItem[] = [];
}
