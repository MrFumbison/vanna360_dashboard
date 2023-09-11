import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-all-shops-page',
  templateUrl: './all-shops-page.component.html',
  styleUrls: ['./all-shops-page.component.css']
})
export class AllShopsPageComponent implements OnInit{

  ngOnInit(): void {
      
  }

  items: any[] = [
    { shop_name: 'abc', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'def', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'ghi', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'jkl', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'abc', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'def', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'ghi', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'jkl', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'abc', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'def', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'ghi', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'jkl', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'abc', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'def', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'ghi', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'delete'},
    { shop_name: 'jkl', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',registration_date: '12-03-2020', action: 'delete'},
  ];

  searchText: string = '';

  onsearchtextentered(searchvalue:string){
    this.searchText = searchvalue;
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
