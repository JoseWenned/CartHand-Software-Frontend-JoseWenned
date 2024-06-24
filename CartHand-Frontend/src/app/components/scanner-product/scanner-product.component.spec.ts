import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerProductComponent } from './scanner-product.component';

describe('ScannerProductComponent', () => {
  let component: ScannerProductComponent;
  let fixture: ComponentFixture<ScannerProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScannerProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScannerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
