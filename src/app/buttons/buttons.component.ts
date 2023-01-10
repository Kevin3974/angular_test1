import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Input()
  count!: number;
  add(){
    this.count++;
    console.log(this.count);

  }

  delete(){
    this.count--;

  }

}
