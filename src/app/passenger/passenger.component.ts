import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent {

  constructor(private api:ApiService){
    api.fetchpass().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }

 data:any=[]
 
}
