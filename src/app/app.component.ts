import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    oddNumbers: number[] = [];
    evenNumbers: number[] = [];

    onGameEvent(currentValue: number) {
        if (currentValue % 2 == 0) {
            this.evenNumbers.push(currentValue);
        } else {
            this.oddNumbers.push(currentValue);
        }
    }
}
