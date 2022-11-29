import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent {

  constructor(private api:ApiService){
    api.fetchpub().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }

 data:any=[]
 
  
}