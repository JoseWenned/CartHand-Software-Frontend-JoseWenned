import { Component } from '@angular/core';
import { RegisterItemProductComponent } from '../../components/forms/register-item-product/register-item-product.component';
import { ScannerCamBarcodeComponent } from '../../components/scanner-cam-barcode/scanner-cam-barcode.component';

@Component({
    selector: 'app-register-product',
    standalone: true,
    templateUrl: './register-product.component.html',
    styleUrl: './register-product.component.scss',
    imports: [ScannerCamBarcodeComponent, RegisterItemProductComponent]
})
export class RegisterProductComponent {

}
