import { Routes } from '@angular/router';
import { RegisterProductComponent } from './pages/register-product/register-product.component';
import { CatalogProductComponent } from './pages/catalog-product/catalog-product.component';

export const routes: Routes = [

    { path: "register", component: RegisterProductComponent },
    { path: "catalogProduct", component: CatalogProductComponent  },

];
