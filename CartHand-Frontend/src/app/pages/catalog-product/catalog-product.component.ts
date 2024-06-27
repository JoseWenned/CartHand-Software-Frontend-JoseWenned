import { Component } from '@angular/core';
import { CatalogListProductComponent } from '../../components/catalog-list-product/catalog-list-product.component';
import { CommonModule } from '@angular/common';
import { CatalogItemProduct } from '../../services/CatalogItemProduct.service';

@Component({
  selector: 'app-catalog-product',
  standalone: true,
  imports: [CommonModule, CatalogListProductComponent],
  providers: [ CatalogItemProduct ],
  templateUrl: './catalog-product.component.html',
  styleUrl: './catalog-product.component.scss'
})
export class CatalogProductComponent {

  constructor( private catologItemProduct: CatalogItemProduct ){

  };

  getCatalogItemProduct(){

    return this.catologItemProduct.ListProduct;

  };

}
