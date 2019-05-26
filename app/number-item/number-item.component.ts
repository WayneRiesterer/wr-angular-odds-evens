import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-item',
  templateUrl: './number-item.component.html',
  styleUrls: ['./number-item.component.css']
})
export class NumberItemComponent {
  @Input() numberItem: number;
}