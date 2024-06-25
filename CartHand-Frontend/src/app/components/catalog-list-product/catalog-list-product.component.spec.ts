import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogListProductComponent } from './catalog-list-product.component';

describe('CatalogListProductComponent', () => {
  let component: CatalogListProductComponent;
  let fixture: ComponentFixture<CatalogListProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogListProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
