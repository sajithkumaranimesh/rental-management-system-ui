import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../service/item.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viw-item',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './viw-item.component.html',
  styleUrl: './viw-item.component.css'
})
export class ViwItemComponent implements OnInit{


  public itemList:any = [];

  constructor(private service:ItemService){}

  ngOnInit(): void {
    this.loadItemTable();
  }

  loadItemTable(){
    this.service.retrieve().subscribe(
      response =>{
        this.itemList = response;
      }
    )
  }

  deleteItem(id:any){
    this.service.deleteItem(id).subscribe(
      response =>{
        this.loadItemTable();
      }
    )
  }

  public seleceteditem:any = {
    id:"",
    name: "",
    rentalPerDay: "",
    finePerDay: "",
    isAvailable: "",
  }

  editItem(item:any){
    if(item!=null){
      this.seleceteditem = item;
    }
  }

  updateItem(){
    this.service.updateItem(this.seleceteditem).subscribe(
      response =>{
        this.loadItemTable();
      }
    )
  }
}
