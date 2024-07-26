import { Component } from '@angular/core';
import { RentalService } from '../../../service/rental.service';

@Component({
  selector: 'app-view-rental',
  standalone: true,
  imports: [],
  templateUrl: './view-rental.component.html',
  styleUrl: './view-rental.component.css'
})
export class ViewRentalComponent {

  public rental:any ={
    
  }
  constructor(private service:RentalService){}


  saveRental(){
    this.service.persist
  }
}
