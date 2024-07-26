import { Component } from '@angular/core';
import { CustomerService } from '../../../service/customer.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {
  public customer = {
    name: "",
    city: "",
    phoneNumber: ""
  }

  constructor(private service: CustomerService) { }

  persist() {
    this.service.persist(this.customer).subscribe(
      (data) => {
        console.log(data);
        this.service.retrieveAll();
      }
    )
  }

  clearText() {
    this.customer.name = "";
    this.customer.city = "";
    this.customer.phoneNumber = "";
  }
}
