import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // quotes = [
  //   new Quote(1, 'Spread love everywhere you go. Let no one ever come to you without leaving happier.', 'Mother Teresa', "Naomi", new Date(2019, 3, 26)),
  //   new Quote(2, 'When you reach the end of your rope, tie a knot in it and hang on.', 'Franklin D Roosevelt', "Naomi", new Date(2019, 3, 26)),
  //   new Quote(3, 'Whoever is happy will make others happy too.', 'Anne Frank', "Naomi", new Date(2019, 3, 26)),
  // ];
  constructor() {
  }
}
