export class TransactionModel{
  id!: number;
  type!: string; //income or expense
  amount!: number;
  category!: string;
  paymentMethod!: string;
  date!: Date;
}
