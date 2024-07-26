import { Component, Injectable, OnInit } from '@angular/core';
import { CustomerService } from '../../../service/customer.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-customer',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})

@Injectable({ providedIn: 'root' })
export class ViewCustomerComponent implements OnInit {

  public customerList: any = [];

  constructor(private service: CustomerService) { }


  ngOnInit(): void {
    this.loadCustomerTable();
  }

  loadCustomerTable() {
    this.service.retrieveAll().subscribe(
      response => {
        this.customerList = response;
      }
    )
  }


  deleteCustomer(id: any) {
    this.service.deleteCustomer(id).subscribe(
      response => {
        this.loadCustomerTable();
      }
    )
  }

  public selectedCustomer = {
    id: "",
    name: "",
    city: "",
    phoneNumber: ""
  }

  updateCustomer(customer: any) {
    if (customer != null) {
      this.selectedCustomer = customer;
    }
  }

  saveUpdateCustomer() {
    this.service.updateCustomer(this.selectedCustomer).subscribe(
      response => {
        console.log(response);
        this.service.retrieveAll();
      }
    )
  }

}
