import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from "./components/header-component/header-component.component";
import { BalanceComponentComponent } from "./components/balance-component/balance-component.component";
import { TransactionComponentComponent } from "./components/transaction-component/transaction-component.component";
import { AddNewTransactionComponentComponent } from "./components/add-new-transaction-component/add-new-transaction-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponentComponent, BalanceComponentComponent, TransactionComponentComponent, AddNewTransactionComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BudgetBuddy';
}
