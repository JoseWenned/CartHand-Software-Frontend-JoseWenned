import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog-product',
  standalone: true,
  imports: [CatalogProductComponent],
  templateUrl: './catalog-product.component.html',
  styleUrl: './catalog-product.component.scss'
})
export class CatalogProductComponent {

  product = {

    name: "Bolacha", 
    price: 2.85,
    dataOfValidated: "01/08/2025",
    unitOfMeasurement: "300g"

  }

}
