import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({providedIn:'root'})
export class CustomerService{
    constructor(private http:HttpClient){}

    persist(customer:any){
        return this.http.post('http://localhost:8080/customer-controller/add',customer);
    }

    retrieveAll(){
        return this.http.get('http://localhost:8080/customer-controller/get-all');
    }

    retrieveById(id:any){
        return this.http.get(`http://localhost:8080/customer-controller/get-by-id/${id}`)
    }

    deleteCustomer(id:any){
        return this.http.delete(`http://localhost:8080/customer-controller/delete/${id}`);
    }

    updateCustomer(customer:any){
        return this.http.put('http://localhost:8080/customer-controller/update',customer);
    }
}