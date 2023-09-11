import { Component } from '@angular/core';

@Component({
  selector: 'app-active-shops-page',
  templateUrl: './active-shops-page.component.html',
  styleUrls: ['./active-shops-page.component.css']
})
export class ActiveShopsPageComponent {

  items: any[] = [
    { shop_name: 'abc', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'add'},
    { shop_name: 'def', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'add'},
    { shop_name: 'ghi', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'add'},
    { shop_name: 'jkl', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'add'},
    { shop_name: 'abc', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'add'},
    { shop_name: 'def', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'add'},
    { shop_name: 'ghi', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'add'},
    { shop_name: 'jkl', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'add'},
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
