import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesListItensProductsComponent } from './pages-list-itens-products.component';

describe('PagesListItensProductsComponent', () => {
  let component: PagesListItensProductsComponent;
  let fixture: ComponentFixture<PagesListItensProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesListItensProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesListItensProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
