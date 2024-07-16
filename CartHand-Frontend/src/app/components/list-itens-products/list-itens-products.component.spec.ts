import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItensProductsComponent } from './list-itens-products.component';

describe('ListItensProductsComponent', () => {
  let component: ListItensProductsComponent;
  let fixture: ComponentFixture<ListItensProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListItensProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItensProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
