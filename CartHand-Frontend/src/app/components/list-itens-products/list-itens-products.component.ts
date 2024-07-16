import { Component } from '@angular/core';
import { CardItensProductsComponent } from "../card-itens-products/card-itens-products.component";

@Component({
  selector: 'app-list-itens-products',
  standalone: true,
  imports: [CardItensProductsComponent],
  templateUrl: './list-itens-products.component.html',
  styleUrl: './list-itens-products.component.scss'
})
export class ListItensProductsComponent {

}
