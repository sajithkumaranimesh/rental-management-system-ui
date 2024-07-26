import { Component } from '@angular/core';
import { AddItemComponent } from "../add-item/add-item.component";
import { ViwItemComponent } from "../viw-item/viw-item.component";

@Component({
  selector: 'app-manage-item',
  standalone: true,
  imports: [AddItemComponent, ViwItemComponent],
  templateUrl: './manage-item.component.html',
  styleUrl: './manage-item.component.css'
})
export class ManageItemComponent {

}
