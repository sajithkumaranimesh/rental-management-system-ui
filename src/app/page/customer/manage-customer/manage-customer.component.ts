import { Component } from '@angular/core';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { ViewCustomerComponent } from "../view-customer/view-customer.component";

@Component({
  selector: 'app-manage-customer',
  standalone: true,
  imports: [AddCustomerComponent, ViewCustomerComponent],
  templateUrl: './manage-customer.component.html',
  styleUrl: './manage-customer.component.css'
})
export class ManageCustomerComponent {

}
