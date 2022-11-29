import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerComponent } from './passenger/passenger.component';
import { UsDataComponent } from './us-data/us-data.component';
import { PublicComponent } from './public/public.component';
import { InfoComponent } from './info/info.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { UserDataComponent } from './user-data/user-data.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { QuoteComponent } from './quote/quote.component';

const myRoute:Routes=[
  {
    path:"",
    component:PassengerComponent
  },
  {
    path:"us",
    component:UsDataComponent
  },
  {
    path:"public",
    component:PublicComponent
  },
  {
    path:"user",
    component:UserDataComponent
  },
  {
    path:"todo"
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PassengerComponent,
    UsDataComponent,
    PublicComponent,
    InfoComponent,
    ShoppingComponent,
    UserDataComponent,
    TodoComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
