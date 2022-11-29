import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  constructor(private api:ApiService){
    api.fetchinfo().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }

 data:any=[]

}
