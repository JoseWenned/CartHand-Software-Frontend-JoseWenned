import { Component } from '@angular/core';
import { ListItensProductsComponent } from "../../components/list-itens-products/list-itens-products.component";

@Component({
  selector: 'app-pages-list-itens-products',
  standalone: true,
  imports: [
    ListItensProductsComponent
],
  templateUrl: './pages-list-itens-products.component.html',
  styleUrl: './pages-list-itens-products.component.scss'
})
export class PagesListItensProductsComponent {

}
