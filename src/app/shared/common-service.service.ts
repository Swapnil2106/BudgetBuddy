import { TransactionModel } from './../components/transaction-component/transaction.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  transactionItems: TransactionModel[] = [];

  expenseCategories: string[] = ['Food & Drink', 'Shopping', 'Travel', 'Rent', 'Healthcare', 'Entertainment', 'Education'];

  incomeCategories: string[] = ['Salary', 'Bonus', 'Investments', 'Allowance', 'Other'];

  paymentMethodTypes: string[] = ['In Cash', 'Credit Card', 'Debit Card', 'Net Banking', 'Online UPI'];

  constructor() {
    this.loadTransactions();
  }

  saveTransactions() {
    localStorage.setItem('transactions', JSON.stringify(this.transactionItems));
  }

  loadTransactions() {
    const savedTransactions = localStorage.getItem('transactions');
    if (savedTransactions) {
      this.transactionItems = JSON.parse(savedTransactions);
    }
  }

  addTransaction(newTransaction: TransactionModel){
    this.transactionItems.push(newTransaction);
    this.saveTransactions();
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

  updateTransaction(updatedTransaction: TransactionModel) {
    const index = this.transactionItems.findIndex(t => t.id === updatedTransaction.id);
    if (index !== -1) {
      this.transactionItems[index] = updatedTransaction;
      this.saveTransactions();
    }
  }

  deleteTransaction(id: number) {
    const index = this.transactionItems.findIndex(transaction => transaction.id === id);
    if (index !== -1) {
      this.transactionItems.splice(index, 1);
      this.saveTransactions();
    }
  }

}
