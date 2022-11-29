import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchpass=()=>
  {
    return this.http.get("https://api.instantwebtools.net/v1/passenger?page=0&size=30")
  }

  fetchus=()=>
  {
    return this.http.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  }
  fetchpub=()=>
  {
    return this.http.get("https://api.publicapis.org/entries")
  }
  fetchshop=()=>
  {
    return this.http.get("https://dummyjson.com/products")
  }
  fetchtodo=()=>
  {
    return this.http.get("https://dummyjson.com/todos")
  }
  fetchquote=()=>
  {
    return this.http.get("https://dummyjson.com/quotes")
  }
  fetchinfo=()=>
  {
    return this.http.get("https://reqres.in/api/users?page=1")
  }
  fetchuser=()=>
  {
    return this.http.get("https://dummyjson.com/users")
  }

}
