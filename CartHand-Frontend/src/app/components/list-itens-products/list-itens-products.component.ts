import { Component } from '@angular/core';
import { CardItensProductsComponent } from "../card-itens-products/card-itens-products.component";
import { ListItensProductService } from '../../services/listItensProducts.service';

@Component({
  selector: 'app-list-itens-products',
  standalone: true,
  imports: [
    CardItensProductsComponent
  ],
  providers: [ ListItensProductService ],
  templateUrl: './list-itens-products.component.html',
  styleUrl: './list-itens-products.component.scss'
})
export class ListItensProductsComponent {

  constructor( private allItensProduct: ListItensProductService ){};

  get allItensProducts(){

    return this.allItensProduct.getAllItensProduct();

  }

}
