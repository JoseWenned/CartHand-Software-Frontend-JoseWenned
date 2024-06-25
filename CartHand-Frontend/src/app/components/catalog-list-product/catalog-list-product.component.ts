import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catalog-list-product',
  standalone: true,
  imports: [],
  templateUrl: './catalog-list-product.component.html',
  styleUrl: './catalog-list-product.component.scss'
})
export class CatalogListProductComponent {

  @Input() name! : string
  @Input() price! : number
  @Input() dateOfValidated! : string
  @Input() unitOfMeasurement! : string

}
