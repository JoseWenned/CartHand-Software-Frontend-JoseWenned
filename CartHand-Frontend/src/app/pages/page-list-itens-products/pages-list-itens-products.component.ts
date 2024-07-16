import { Component } from '@angular/core';
import { ListItensProductService } from '../../services/listItensProducts.service';
import { CommonModule } from '@angular/common';
import { CardItensProductsComponent } from '../../components/card-itens-products/card-itens-products.component';
import { ListItensProductsComponent } from "../../components/list-itens-products/list-itens-products.component";

@Component({
  selector: 'app-pages-list-itens-products',
  standalone: true,
  imports: [
    CommonModule,
    ListItensProductsComponent
],
  providers: [ ListItensProductService ],
  templateUrl: './pages-list-itens-products.component.html',
  styleUrl: './pages-list-itens-products.component.scss'
})
export class PagesListItensProductsComponent {

  constructor( private allItensProduct: ListItensProductService ){};

  get allItensProducts(){

    return this.allItensProduct.getAllItensProduct();

  }

}
