import {
    Component,
    EventEmitter,
    OnInit,
    Output
} from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
    currentValue: number = 0;
    @Output() gameEvent = new EventEmitter<number>()
    gameRunning: boolean = false;
    intervalID: number;

    constructor() { }

    ngOnInit() {
    }

    startGame() {
        this.intervalID = window.setInterval(() => {
            this.gameEvent.emit(this.currentValue++);
        }, 1000);
        this.gameRunning = true;
    }

    stopGame() { 
        window.clearInterval(this.intervalID);
        this.gameRunning = false;
    }
}
