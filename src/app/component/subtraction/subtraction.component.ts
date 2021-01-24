import {Component} from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent {
  a: number;
  b: number;
  result: number;


  substract(): void{
    this.result = this.a - this.b;
  }
}
