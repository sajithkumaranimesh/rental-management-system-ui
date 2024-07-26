import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageCustomerComponent } from "./page/customer/manage-customer/manage-customer.component";
import { NavBarComponent } from "./common/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ManageCustomerComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rental-manage-system';
}
