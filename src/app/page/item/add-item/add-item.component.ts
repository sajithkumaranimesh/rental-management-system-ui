import { Component } from '@angular/core';
import { ItemService } from '../../../service/item.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {

  public item:any = {
    name: "",
    rentalPerDay: "",
    finePerDay: "",
    isAvailable: "",
  }

  constructor(private service:ItemService){}


  saveItem(){
    this.service.persist(this.item).subscribe(
      response => {
        this.service.retrieve();
      }
    )
  }
}
