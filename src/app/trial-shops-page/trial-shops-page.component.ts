import { Component } from '@angular/core';

@Component({
  selector: 'app-trial-shops-page',
  templateUrl: './trial-shops-page.component.html',
  styleUrls: ['./trial-shops-page.component.css']
})
export class TrialShopsPageComponent {

  items: any[] = [
    { shop_name: 'abc', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo', remaining_days: '2days',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'def', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo', remaining_days: '2days',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'ghi', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo', remaining_days: '2days',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'jkl', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo', remaining_days: '2days',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'abc', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo', remaining_days: '2days',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'def', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo', remaining_days: '2days',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'ghi', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo', remaining_days: '2days',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'jkl', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo', remaining_days: '2days',registration_date: '12-03-2020', action: 'delete'},
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
