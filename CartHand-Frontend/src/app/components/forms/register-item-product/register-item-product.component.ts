import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ScannerBarcodeService } from '../../../services/scannerBarcodeProduct.service';

@Component({
    selector: 'app-register-item-product',
    standalone: true,
    templateUrl: './register-item-product.component.html',
    styleUrl: './register-item-product.component.scss',
    imports: [ReactiveFormsModule]
})
export class RegisterItemProductComponent implements OnInit {

  constructor( private barcodeService: ScannerBarcodeService ){}

  name = new FormControl("");
  description = new FormControl("");
  category = new FormControl("");
  brand = new FormControl("");
  supplier = new FormControl("");
  price = new FormControl("");
  stock = new FormControl("");
  dateOfValidated = new FormControl("");
  barcode = new FormControl("");
  unitOfMeasurement = new FormControl("");

  formSubmit(event: Event){

    event.preventDefault();

    console.log({

      name: this.name.value,
      description: this.description.value,
      category: this.category.value,
      brand: this.brand.value,
      supplier: this.supplier.value,
      price: this.price.value,
      stock: this.stock.value,
      dateOfValidatedd: this.dateOfValidated.value,
      barcode: this.barcode.value,
      unitOfMeasurement: this.unitOfMeasurement.value,

    });

    this.name.setValue("");
    this.description.setValue("");
    this.category.setValue("");
    this.brand.setValue("");
    this.supplier.setValue("");
    this.price.setValue("");
    this.stock.setValue("");
    this.dateOfValidated.setValue("");
    this.barcode.setValue("");
    this.unitOfMeasurement.setValue("");

  };

  onButtonClick(){

    console.log("Click button");

  };

  ngOnInit(): void{

    this.barcodeService.currentBarcode.subscribe( barcode => {

      this.barcode.setValue( barcode );

    });

  };

};
