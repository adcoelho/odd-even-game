import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    gameValues: number[] = [];

    onGameEvent(currentValue: number) {
        this.gameValues.push(currentValue);
    }
}
