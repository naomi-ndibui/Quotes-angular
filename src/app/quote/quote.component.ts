import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Spread love everywhere you go. Let no one ever come to you without leaving happier.','Mother Teresa',"Naomi"),
    new Quote(2, 'When you reach the end of your rope, tie a knot in it and hang on.','Franklin D Roosevelt',"Naomi"),
    new Quote(3, 'Whoever is happy will make others happy too.','Anne Frank',"Naomi"),
];


addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  this.quotes.unshift(quote)

}

toogleDetails(index){
  this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
}

deleteQuote(isComplete,index){
  if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

      if(toDelete){
          this.quotes.splice(index,1)
      }
  }
}


  constructor() { }

  ngOnInit() {
  }

}
