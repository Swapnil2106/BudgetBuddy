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
    this.categories = this.commonService.expenseCategories;
  }

  formValue !: FormGroup;
  categories: string[] = [];
  paymentMethodTypes: string[] = [];
  maxDate: string = '';
  transactionItemObj: TransactionModel = new TransactionModel();

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
    }

    editTransaction(transaction: TransactionModel) {
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

}
