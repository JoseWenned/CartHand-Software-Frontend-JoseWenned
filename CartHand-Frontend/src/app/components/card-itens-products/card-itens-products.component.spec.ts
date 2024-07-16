import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItensProductsComponent } from './card-itens-products.component';

describe('CardItensProductsComponent', () => {
  let component: CardItensProductsComponent;
  let fixture: ComponentFixture<CardItensProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardItensProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardItensProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
