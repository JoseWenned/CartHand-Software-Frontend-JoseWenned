import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-item-product.component.html',
  styleUrl: './register-item-product.component.scss'
})
export class RegisterItemProductComponent {

  name = new FormControl("");
  description = new FormControl("");
  category = new FormControl("");
  supplier = new FormControl("");
  price = new FormControl("");
  stock = new FormControl("");
  dateOfValidated = new FormControl("");
  barcode = new FormControl("");
  unitOfMeasurement = new FormControl("");

}
