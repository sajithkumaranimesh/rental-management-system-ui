import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class RentalService{
    constructor(private http:HttpClient){}

    persist(rental:any){
        return this.http.post('http://localhost:8080/rental-controller/add',rental);
    }

    retrieve(){
        return this.http.get('http://localhost:8080/rental-controller/get-all');
    }

    deleteRentalById(id:any){
        return this.http.delete(`http://localhost:8080/rental-controller/delete/${id}`);
    }

    updateRental(rental:any){
        this.http.put('http://localhost:8080/rental-controller/update',rental);
    }
}