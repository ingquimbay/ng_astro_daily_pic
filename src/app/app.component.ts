import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NASA\'s Astronomy Picture';

  private temp: string;

  setTemp(val): void {
    this.temp = val;
  }
  private process(): boolean {
    let x: boolean = false;
    if (this.temp == 'sunshine') {
      x = true;
    }
    return x;
  }
}
