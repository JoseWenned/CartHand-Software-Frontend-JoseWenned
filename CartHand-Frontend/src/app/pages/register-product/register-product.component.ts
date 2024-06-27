import { Component } from '@angular/core';
import { RegisterItemProductComponent } from '../../components/forms/register-item-product/register-item-product.component';

@Component({
    selector: 'app-register-product',
    standalone: true,
    templateUrl: './register-product.component.html',
    styleUrl: './register-product.component.scss',
    imports: [RegisterItemProductComponent]
})
export class RegisterProductComponent {

}
