import { Component } from '@angular/core';
import { MenuItem } from './common/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'loan-application';

  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        path: '/home',
        title: 'Home',
      },
      {
        path: '/about',
        title: 'About Us',
      },
    ];
  }
}
