import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote.class';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
// public quote = new Quote('', '');
public quote:any = "";
  constructor(private quoteservice:QuoteService) { 
    this.getQuotes()
  }

  ngOnInit(): void {
  }


  public getQuotes(){
    this.quoteservice.getRandomQuotes().subscribe((data) => {
      // this.quote = new Quote(data.quoteText, data.quoteAuthor);
      // console.log(data);
      this.quote = data;
    });
  }

}
