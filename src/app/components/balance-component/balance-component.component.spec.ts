import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceComponentComponent } from './balance-component.component';

describe('BalanceComponentComponent', () => {
  let component: BalanceComponentComponent;
  let fixture: ComponentFixture<BalanceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalanceComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
