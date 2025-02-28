import { Component } from '@angular/core';
import { BalanceComponentComponent } from '../balance-component/balance-component.component';
import { TransactionComponentComponent } from '../transaction-component/transaction-component.component';
import { AddNewTransactionComponentComponent } from '../add-new-transaction-component/add-new-transaction-component.component';

@Component({
  selector: 'app-home-component',
  imports: [BalanceComponentComponent, TransactionComponentComponent, AddNewTransactionComponentComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

}
