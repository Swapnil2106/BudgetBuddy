import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTransactionComponentComponent } from './add-new-transaction-component.component';

describe('AddNewTransactionComponentComponent', () => {
  let component: AddNewTransactionComponentComponent;
  let fixture: ComponentFixture<AddNewTransactionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewTransactionComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewTransactionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
