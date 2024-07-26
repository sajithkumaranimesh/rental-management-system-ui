import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class ItemService{
    constructor(private http:HttpClient){}

    persist(item:any){
        return this.http.post('http://localhost:8080/item-controller/add',item);
    }

    retrieve(){
        return this.http.get('http://localhost:8080/item-controller/get-all');
    }

    retrieveById(id:any){
        return this.http.get(`http://localhost:8080/item-controller/get-by-id/${id}`);
    }

    deleteItem(id:any){
        return this.http.delete(`http://localhost:8080/item-controller/delete/${id}`);
    }

    updateItem(item:any){
        return this.http.put('http://localhost:8080/item-controller/update', item);
    }
}