import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormRegisterProductComponent } from './components/form-register-product/form-register-product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormRegisterProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CartHand-Frontend';
}
