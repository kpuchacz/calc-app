import {Component} from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent {
  a: number;
  b: number;
  result: number;


  multiply(): void{
    this.result = this.a * this.b;
  }
}
