import {Component,HostBinding, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  votes: number;

  @Input () quote:Quote;
  vote = 0;

  constructor() {
    this.votes = 0;
   }

   likeVote(): boolean{
     this.votes +=1;
     return false;
   }

   dislikeVote(): boolean{
    this.votes -=1;
    return false;
  }

  ngOnInit() {
  }

}
