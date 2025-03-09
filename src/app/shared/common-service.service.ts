import { isPlatformBrowser } from '@angular/common';
import { BudgetModel } from '../components/budget-component/budget.model';
import { TransactionModel } from './../components/transaction-component/transaction.model';
import { Injectable } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {


  transactionItems: TransactionModel[] = [];

  expenseCategories: string[] = ['Food & Drink', 'Shopping', 'Travel', 'Rent', 'Healthcare', 'Entertainment', 'Education'];

  incomeCategories: string[] = ['Salary', 'Bonus', 'Investments', 'Allowance', 'Other'];

  paymentMethodTypes: string[] = ['In Cash', 'Credit Card', 'Debit Card', 'Net Banking', 'Online UPI'];

  budgetItems: BudgetModel[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.loadTransactions();
    this.loadBudgets();
  }

  saveTransactions() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('transactions', JSON.stringify(this.transactionItems));
    }
  }

  saveBudgets() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('budgets', JSON.stringify(this.budgetItems));
    }
  }

  loadTransactions() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTransactions = localStorage.getItem('transactions');
      if (savedTransactions) {
        this.transactionItems = JSON.parse(savedTransactions);
      }
    }
  }

  loadBudgets() {
    if (isPlatformBrowser(this.platformId)) {
      const savedBudgets = localStorage.getItem('budgets');
      if (savedBudgets) {
        this.budgetItems = JSON.parse(savedBudgets);
      }
    }
  }
  addTransaction(newTransaction: TransactionModel){
    this.transactionItems.push(newTransaction);
    this.saveTransactions();
  }

  addBudget(newBudget: BudgetModel){
    this.budgetItems.push(newBudget);
    this.saveBudgets();
  }

  getTransactions(): TransactionModel[]{
    return this.transactionItems;
  }

  getBudgets(): BudgetModel[]{
    return this.budgetItems;
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

  updateBudget(updatedBudget: BudgetModel) {
    const index = this.budgetItems.findIndex(t => t.id === updatedBudget.id);
    if (index !== -1) {
      this.budgetItems[index] = updatedBudget;
      this.saveBudgets();
    }
  }

  deleteTransaction(id: number) {
    const index = this.transactionItems.findIndex(transaction => transaction.id === id);
    if (index !== -1) {
      this.transactionItems.splice(index, 1);
      this.saveTransactions();
    }
  }

  deleteBudget(id: number) {
    const index = this.budgetItems.findIndex(budget => budget.id === id);
    if (index !== -1) {
      this.budgetItems.splice(index, 1);
      this.saveBudgets();
    }
  }

}
