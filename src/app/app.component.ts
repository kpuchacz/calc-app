import { Component } from '@angular/core';
import {postcss} from '@angular-devkit/build-angular/src/webpack/plugins/postcss-cli-resources';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc-app';
}
