import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../shared/common-service.service';
import { TransactionModel } from '../transaction-component/transaction.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-new-transaction-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-new-transaction-component.component.html',
  styleUrl: './add-new-transaction-component.component.css'
})
export class AddNewTransactionComponentComponent implements OnInit {

  constructor(private commonService: CommonServiceService,
              private formBuilder: FormBuilder,
              private router: Router){
    }

  ngOnInit(): void {
    this.setMaxDate();
    this.initializeForm();
    this.paymentMethodTypes = this.commonService.paymentMethodTypes;
    this.categories = this.commonService.expenseCategories;
  }

  isExpense: boolean = true;
  categories: string[] = [];
  paymentMethodTypes: string[] = [];
  transactionItem: TransactionModel = new TransactionModel();
  formValue !: FormGroup;
  maxDate: string = '';

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


  toggleType(value: boolean){
    if(value){
      this.isExpense = true;
      this.categories = this.commonService.expenseCategories;
    } else{
      this.isExpense = false;
      this.categories = this.commonService.incomeCategories;
    }
  }

  addTransaction(){
    if (this.formValue.valid) {
      let newTransaction: TransactionModel = {
        id: Date.now(), // Generates a unique ID based on timestamp
        type: this.isExpense ? 'expense' : 'income',
        amount: this.formValue.value.amount,
        category: this.formValue.value.category,
        paymentMethod: this.formValue.value.paymentMethod,
        date: this.formValue.value.date
      };

      this.commonService.addTransaction(newTransaction);
      console.log('Transactions that got added:', this.commonService.transactionItems);

      this.formValue.reset(); // Reset form after submission
      this.router.navigate(['/home']);
    } else {
      this.formValue.markAllAsTouched();
      return;
    }
  }
}
