import { Component } from '@angular/core';

@Component({
  selector: 'app-suspended-shops-page',
  templateUrl: './suspended-shops-page.component.html',
  styleUrls: ['./suspended-shops-page.component.css']
})
export class SuspendedShopsPageComponent {

  items: any[] = [
    { shop_name: 'abc', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'def', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'ghi', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'jkl', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'ghi', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'jkl', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'delete'},
  ];

  searchtext: string = '';

  onsearchtextentered(searchvalue:string){
    this.searchtext = searchvalue;
    console.log(this.searchtext)
  }

  openModal(){
    const modalDiv = document.getElementById('myModal')
    if(modalDiv != null){
      modalDiv.style.display = "block"
    }
  }

  closeModal(){
    const modalDiv = document.getElementById('myModal')
    if(modalDiv != null){
      modalDiv.style.display = "none"
    }
  }
}
