import { Routes } from '@angular/router';
import { RegisterProductComponent } from './pages/page-register-product/register-product.component';
import { ListItensProductsComponent } from './components/list-itens-products/list-itens-products.component';

export const routes: Routes = [

    { path: "register", component: RegisterProductComponent },
    { path: "listItensProducts", component: ListItensProductsComponent },

];
