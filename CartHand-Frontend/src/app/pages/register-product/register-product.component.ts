import { Component } from '@angular/core';
import { FormRegisterProductComponent } from "../../components/form-register-product/form-register-product.component";

@Component({
    selector: 'app-register-product',
    standalone: true,
    templateUrl: './register-product.component.html',
    styleUrl: './register-product.component.scss',
    imports: [FormRegisterProductComponent]
})
export class RegisterProductComponent {

}
