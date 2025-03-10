import { TransactionModel } from './transaction.model';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonServiceService } from '../../shared/common-service.service';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './transaction-component.component.html',
  styleUrl: './transaction-component.component.css'
})
export class TransactionComponentComponent implements OnInit {

  @Input() transactionItems: TransactionModel[] = [];

  constructor(private commonService: CommonServiceService, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.initializeForm();
    this.setMaxDate();
    this.paymentMethodTypes = this.commonService.paymentMethodTypes;
    if(this.isExpense){
      this.categories = this.commonService.expenseCategories;
    }
    else{
      this.categories = this.commonService.incomeCategories;
    }
    this.filteredTransactions = [...this.transactionItems];
    this.filterCategories = [...this.commonService.expenseCategories, ...this.commonService.incomeCategories];
  }

  formValue !: FormGroup;
  categories: string[] = [];
  paymentMethodTypes: string[] = [];
  maxDate: string = '';
  transactionItemObj: TransactionModel = new TransactionModel();
  filteredTransactions: TransactionModel[] = [];
  filterCategories: string[] = [];
  isExpense: boolean = true;

  filterForm !: FormGroup;

  setMaxDate() {
      const today = new Date();
      this.maxDate = today.toISOString().split('T')[0]; // Format YYYY-MM-DD
    }

    initializeForm() {
      this.formValue = this.formBuilder.group({
        amount: ['', [Validators.required, Validators.min(1)]],
        category: ['', Validators.required],
        paymentMethod: ['', Validators.required],
        date: ['', [Validators.required]],
      });

      this.filterForm = this.formBuilder.group({
        fromDate: [''],
        toDate: [''],
        category: [''],
        amount: [''],
        paymentMethod: ['']
      });
    }

    editTransaction(transaction: TransactionModel) {
      if(transaction.type === 'expense'){
        this.categories = this.commonService.expenseCategories;
      }
      else{
        this.categories = this.commonService.incomeCategories;
      }
      if (!this.formValue) {
        console.error('Form is not initialized');
        return;
      }

      this.formValue.setValue({
        amount: transaction.amount || '',
        category: transaction.category || '',
        paymentMethod: transaction.paymentMethod || '',
        date: transaction.date || ''
      });

      this.transactionItemObj = { ...transaction }; // Store the transaction being edited
    }


  updateTransactionDetails(){
      this.transactionItemObj.type = this.formValue.value.type;
      this.transactionItemObj.amount = this.formValue.value.amount;
      this.transactionItemObj.category = this.formValue.value.category;
      this.transactionItemObj.paymentMethod = this.formValue.value.paymentMethod;
      this.transactionItemObj.date = this.formValue.value.date;

      this.commonService.updateTransaction(this.transactionItemObj);
  }


  deleteTransaction(data: any) {
    if (confirm('Are you sure you want to delete this transaction?')) {
      this.commonService.deleteTransaction(data.id);
    }
  }

  applyFilter() {
    const { fromDate, toDate, category, amount, paymentMethod } = this.filterForm.value;

    // If no filters are applied, show all transactions
    if (!fromDate && !toDate && !category && !amount && !paymentMethod) {
      this.filteredTransactions = [...this.transactionItems];
      return;
    }

    // Apply filters only when the button is clicked
    this.filteredTransactions = this.transactionItems.filter(transaction => {
      return (
        (!fromDate || new Date(transaction.date) >= new Date(fromDate)) &&
        (!toDate || new Date(transaction.date) <= new Date(toDate)) &&
        (!category || transaction.category.toLowerCase().includes(category.toLowerCase())) &&
        (!amount || transaction.amount === +amount) &&
        (!paymentMethod || transaction.paymentMethod === paymentMethod)
      );
    });
  }


  resetFilter() {
    this.filterForm.reset(); // Clear form
    this.filteredTransactions = [...this.transactionItems]; // Restore original transactions
  }

}
