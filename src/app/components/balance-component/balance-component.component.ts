import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-balance-component',
  imports: [],
  templateUrl: './balance-component.component.html',
  styleUrl: './balance-component.component.css'
})
export class BalanceComponentComponent {
  @Input() expense: number = 0;
  @Input() totalBalance: number = 0;
  @Input() income: number = 0;
}
