import {Component} from '@angular/core';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent {
  a: number;
  b: number;
  result: number;


  add(): void {
    this.result = this.a + this.b;
    if (this.a === 0 && this.b === 0) {
      this.result = 0;
    }
  }
}
