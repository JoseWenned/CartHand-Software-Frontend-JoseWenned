import { Component } from '@angular/core';
import { CatalogListProductComponent } from '../../components/catalog-list-product/catalog-list-product.component';

@Component({
  selector: 'app-catalog-product',
  standalone: true,
  imports: [CatalogListProductComponent],
  templateUrl: './catalog-product.component.html',
  styleUrl: './catalog-product.component.scss'
})
export class CatalogProductComponent {

  product = {

    name: "Bolacha", 
    price: 2.85,
    dateOfValidated: "01/08/2025",
    unitOfMeasurement: "300g"

  }

}
