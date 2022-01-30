import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  statement: string = "© 2022 Laons Bank of Nigerian Prince | All rights reserved" 

  constructor() { }

  ngOnInit() {
  }

}
