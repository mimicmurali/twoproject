import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'twoproject';
  options=[{name:'puma',price:500},{name:'nike',price:500}];
}
