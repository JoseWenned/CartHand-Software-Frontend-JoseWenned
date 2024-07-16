import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ScannerBarcodeService } from '../../../services/scannerBarcodeProducts.service';
import { CommonModule } from '@angular/common';
import { ListItensProductService } from '../../../services/listItensProducts.service';
import { IItemProductCreate } from '../../../interfaces/itemProduct.interface';

@Component({
    selector: 'app-register-item-product',
    standalone: true,
    templateUrl: './register-item-product.component.html',
    styleUrl: './register-item-product.component.scss',
    imports: [ReactiveFormsModule, CommonModule]
})
export class RegisterItemProductComponent implements OnInit {

  constructor( 
    private barcodeService: ScannerBarcodeService,
    private listItensProducts: ListItensProductService
  ){}

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
  image: File | null = null;
  imagePreview: string | null = null;

  formSubmit(event: Event){

    event.preventDefault();

    const data: IItemProductCreate = ({

      name: this.name.value || "",
      description: this.description.value || "",
      category: this.category.value || "",
      brand: this.brand.value || "",
      supplier: this.supplier.value || "",
      price: this.price.value || "",
      stock: parseInt(this.stock.value || '0', 10),
      dateOfValidated: new Date(this.dateOfValidated.value || ''),
      barcode: this.barcode.value || "",
      unitOfMeasuarement: this.unitOfMeasurement.value || "",
      image: this.image,

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
    this.image = null;
    this.imagePreview = null;

    this.listItensProducts.addItensProducts( data );

  };

  onButtonClick(){

    console.log("Click button");

  };

  onFileSelected( event: Event ) {

    const file = ( event.target as HTMLInputElement ).files?.[0];

    if( file ){

      this.image = file;

      const reader = new FileReader();
      reader.onload = () => {

        this.imagePreview = reader.result as string;

      };

      reader.readAsDataURL( file );

    };

  };

  ngOnInit(): void{

    this.barcodeService.currentBarcode.subscribe( barcode => {

      this.barcode.setValue( barcode );

    });

  };

};
