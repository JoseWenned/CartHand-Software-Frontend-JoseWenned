import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterProductComponent } from './form-register-product.component';

describe('FormRegisterProductComponent', () => {
  let component: FormRegisterProductComponent;
  let fixture: ComponentFixture<FormRegisterProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRegisterProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegisterProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
