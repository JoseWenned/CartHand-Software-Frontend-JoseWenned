import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterItemProductComponent } from './register-item-product.component';

describe('RegisterProductComponent', () => {
  let component: RegisterItemProductComponent;
  let fixture: ComponentFixture<RegisterItemProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterItemProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterItemProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
