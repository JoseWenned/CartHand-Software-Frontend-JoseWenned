import { Component, Input } from '@angular/core';
import { ScannerProductComponent } from '../scanner-product/scanner-product.component';

@Component({
  selector: 'app-catalog-product',
  standalone: true,
  imports: [ ScannerProductComponent ],
  templateUrl: './catalog-product.component.html',
  styleUrl: './catalog-product.component.scss'
})
export class CatalogProductComponent {

  @Input() name! : string;
  @Input() price! : number;
  @Input() dataOfValidated! : string;
  @Input() unitOfMeasurement! : string;

}
