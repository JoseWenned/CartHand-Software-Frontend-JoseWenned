import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerCamBarcodeComponent } from './scanner-cam-barcode.component';

describe('ScannerCamBarcodeComponent', () => {
  let component: ScannerCamBarcodeComponent;
  let fixture: ComponentFixture<ScannerCamBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScannerCamBarcodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScannerCamBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
