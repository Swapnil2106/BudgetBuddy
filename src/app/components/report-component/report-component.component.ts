import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { TransactionModel } from '../transaction-component/transaction.model';
import { CommonServiceService } from '../../shared/common-service.service';

Chart.register(...registerables);
@Component({
  selector: 'app-report-component',
  imports: [],
  templateUrl: './report-component.component.html',
  styleUrl: './report-component.component.css'
})
export class ReportComponentComponent {

  transactions: TransactionModel[] = [];

  categoryData: { [key: string]: number } = {};

  pieChart: any;
  isExpense: boolean = true;
  categories: string[] = [];

  constructor(private commonService: CommonServiceService) {}

  ngOnInit() {
    this.transactions = this.commonService.transactionItems;
    this.processTransactionData('expense');
  }

  toggleType(value: boolean){
    if(value){
      this.isExpense = true;
    } else{
      this.isExpense = false;
    }
  }

  processTransactionData(transactionType: string) {
    this.categoryData = {};

    // Filter transactions based on type (expense or income)
    const filteredTransactions = this.transactions.filter(transaction => transaction.type === transactionType);

    filteredTransactions.forEach(transaction => {
      if (this.categoryData[transaction.category]) {
        this.categoryData[transaction.category] += transaction.amount;
      } else {
        this.categoryData[transaction.category] = transaction.amount;
      }
    });

    this.createPieChart();
  }

  createPieChart() {
    const categories = Object.keys(this.categoryData);
    const amounts = Object.values(this.categoryData);

    const ctx = document.getElementById('categoryPieChart') as HTMLCanvasElement;
    if (this.pieChart) {
      this.pieChart.destroy();
    }

    this.pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: categories,
        datasets: [{
          data: amounts,
          backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40', '#77b254'],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });
  }
}
