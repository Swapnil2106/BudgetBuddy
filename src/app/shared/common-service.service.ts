import { TransactionModel } from './../components/transaction-component/transaction.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }

  transactionItems: TransactionModel[] = [];

  expenseCategories: string[] = ['Food & Drink', 'Shopping', 'Travel', 'Rent', 'Healthcare', 'Entertainment', 'Education'];

  incomeCategories: string[] = ['Salary', 'Bonus', 'Investments', 'Allowance', 'Other'];

  paymentMethodTypes: string[] = ['In Cash', 'Credit Card', 'Debit Card', 'Net Banking', 'Online UPI'];

  addTransaction(newTransaction: TransactionModel){
    this.transactionItems.push(newTransaction);
  }

  getTransactions(): TransactionModel[]{
    return this.transactionItems;
  }

  getTotalExpense(): number {
    return this.transactionItems
      .filter(t => t.type === 'expense')
      .reduce((total, t) => total + t.amount, 0);
  }

  getTotalIncome(): number {
    return this.transactionItems
      .filter(t => t.type === 'income')
      .reduce((total, t) => total + t.amount, 0);
  }

}
