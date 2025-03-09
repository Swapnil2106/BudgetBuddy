import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonServiceService } from '../../shared/common-service.service';
import { BudgetModel } from './budget.model';
import { CommonModule } from '@angular/common';
import { TransactionModel } from '../transaction-component/transaction.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './budget-component.component.html',
  styleUrl: './budget-component.component.css'
})
export class BudgetComponentComponent implements OnInit{

  formValue !: FormGroup;
  maxDate: string = '';
  budgetItems: BudgetModel[] = [];
  transactionItems: TransactionModel[] = [];
  categories: string[] = [];
  showAdd!: boolean;
  showUpdate!: boolean;
  budgetItemObj: BudgetModel = new BudgetModel();

  constructor(private formBuilder: FormBuilder, private commonService: CommonServiceService, private router: Router){}

  ngOnInit(): void {
    this.budgetItems = this.commonService.getBudgets();
    this.transactionItems = this.commonService.getTransactions();
    this.categories = this.commonService.expenseCategories;
    this.initializeForm();
  }

  initializeForm() {
    this.formValue = this.formBuilder.group(
      {
        name: ['', Validators.required],
        amount: ['', [Validators.required, Validators.min(1)]],
        category: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', [Validators.required]],
      },
      { validator: this.dateRangeValidator }
    );
  }

  dateRangeValidator(group: AbstractControl) {
    const startDate = new Date(group.get('startDate')?.value);
    const endDate = new Date(group.get('endDate')?.value);

    if(startDate < endDate || startDate === endDate){
      return null;
    }
    else{
      const error = {dateRange: 'date range error'};
      return error;
    }
  }

  totalAmountSpentPerCategory(category: string){
    let amountSpent =  this.transactionItems.filter(c => c.category === category).reduce((total, x) => total + x.amount, 0);
    return amountSpent;
  }

  addBudget(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

  addBudgetDetails(){
    if (this.formValue.valid) {
      let newBudget: BudgetModel = {
        id: Date.now(), // Generates a unique ID based on timestamp
        name: this.formValue.value.name,
        amount: this.formValue.value.amount,
        category: this.formValue.value.category,
        startDate: this.formValue.value.startDate,
        endDate: this.formValue.value.endDate
      };

      this.commonService.addBudget(newBudget);
      console.log('Budgets that got added:', this.commonService.budgetItems);

      this.formValue.reset(); // Reset form after submission
    } else {
      alert('Please fill in all fields correctly.');
    }
  }

  updateBudget(budget: BudgetModel) {
    this.showAdd=false;
    this.showUpdate=true;

    if (!this.formValue) {
      console.error('Form is not initialized');
      return;
    }

    this.formValue.setValue({
      name: budget.name || '',
      amount: budget.amount || '',
      category: budget.category || '',
      startDate: budget.startDate || '',
      endDate: budget.endDate || ''
    });

    this.budgetItemObj = { ...budget }; // Store the budget after being edited
  }

  updateBudgetDetails(){
    if (this.formValue.valid) {
    this.budgetItemObj.name = this.formValue.value.name;
      this.budgetItemObj.amount = this.formValue.value.amount;
      this.budgetItemObj.category = this.formValue.value.category;
      this.budgetItemObj.startDate = this.formValue.value.startDate;
      this.budgetItemObj.endDate = this.formValue.value.endDate;

      this.commonService.updateBudget(this.budgetItemObj);
    }else {
      alert('Please fill in all fields correctly.');
    }
  }

  deleteBudget(data: any) {
    if (confirm('Are you sure you want to delete this budget?')) {
      this.commonService.deleteBudget(data.id);
    }
  }

}
