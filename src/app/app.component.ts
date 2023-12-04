import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'style-classbinding';

  multiCssClasses = {
    'colorChange' : true,
    'bgColor' : true,
    'singleCssColorChange' : false
  }

  inlineCssStyle = {
  'color' : 'green',
  'backgroundColor' : 'white' ,
  'font-weight' : 'bold'
  }
}
