import { TransactionModel } from './transaction.model';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonServiceService } from '../../shared/common-service.service';

@Component({
  selector: 'app-transaction-component',
  imports: [CommonModule],
  templateUrl: './transaction-component.component.html',
  styleUrl: './transaction-component.component.css'
})
export class TransactionComponentComponent {

  @Input() transactionItems: TransactionModel[] = [];

  constructor(private commonService: CommonServiceService){}

}
