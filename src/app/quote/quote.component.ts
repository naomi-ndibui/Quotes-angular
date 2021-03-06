import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { faCat } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  catIcon = faCat;
  quotes = [
    new Quote(1, 'Spread love everywhere you go. Let no one ever come to you without leaving happier.', 'Mother Teresa', "Naomi", new Date(2019, 3, 26)),
    new Quote(2, 'When you reach the end of your rope, tie a knot in it and hang on.', 'Franklin D Roosevelt', "Naomi", new Date(2019, 3, 26)),
    new Quote(3, 'Whoever is happy will make others happy too.', 'Anne Frank', "Naomi", new Date(2019, 3, 26)),
  ];

  constructor() { }

  ngOnInit() {
  }


  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.unshift(quote);

  }

  toogleDetails(index) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

}
