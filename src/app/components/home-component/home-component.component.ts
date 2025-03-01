import { Component, OnInit } from '@angular/core';
import { BalanceComponentComponent } from '../balance-component/balance-component.component';
import { TransactionComponentComponent } from '../transaction-component/transaction-component.component';
import { TransactionModel } from '../transaction-component/transaction.model';
import { CommonServiceService } from '../../shared/common-service.service';

@Component({
  selector: 'app-home-component',
  imports: [BalanceComponentComponent, TransactionComponentComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit {
  transactionItems: TransactionModel[] = [];
  expense: number = 0;
  totalBalance: number = 0;
  income: number = 0;

  constructor(private commonService: CommonServiceService){  }

  ngOnInit(): void {
    this.transactionItems = this.commonService.getTransactions();
    this.updateTotals();
  }

  updateTotals(){
    this.expense = this.commonService.getTotalExpense();
    this.income = this.commonService.getTotalIncome();
    this.totalBalance = this.income - this.expense;
  }
}
