import { Component, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
   @Output() count = 0;
   ngOnInit(){
    console.log(this.count)
   }
   

  

}
