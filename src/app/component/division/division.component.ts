import {Component} from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent {
  a: number;
  b: number;
  result: number;
  justDont: string;

  divide(): void {
    this.result = this.a / this.b;
    this.justDont = null;
  }


  heOrSheSeriouslyTriesToDivideBeZeroHaHaHaHa(): void {
    this.justDont = 'Just don\'t';
    this.result = null;
  }
}
