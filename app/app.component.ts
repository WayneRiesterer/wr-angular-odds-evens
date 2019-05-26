import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected evenNumbers: Array<number> = [];
  protected oddNumbers: Array<number> = [];
  protected isActive: boolean = false;

  currentNumber: number = 0;
  
  private interval: number = undefined;


  protected onStart(): void {
    this.interval = setInterval(() => {
      this.currentNumber++;
      if (this.currentNumber % 2 === 1) {
        this.oddNumbers.push(this.currentNumber);
      } else {
        this.evenNumbers.push(this.currentNumber);
      }
    }, 1000);
    this.isActive = true;
  }

  protected onStop(): void {
    clearInterval(this.interval);
    this.isActive = false;
  }

  protected onClear(): void {
    this.oddNumbers = [];
    this.evenNumbers = [];
  }

  protected onReset(): void {
    this.onClear();
    this.currentNumber = 0;
  }
}
