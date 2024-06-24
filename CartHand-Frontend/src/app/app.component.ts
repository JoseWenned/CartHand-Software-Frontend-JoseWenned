import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterProductComponent } from "./pages/register-product/register-product.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RegisterProductComponent]
})
export class AppComponent {
  title = 'CartHand-Frontend';
}
