import { Component } from '@angular/core';

@Component({
  selector: 'app-premium-shops-page',
  templateUrl: './premium-shops-page.component.html',
  styleUrls: ['./premium-shops-page.component.css']
})
export class PremiumShopsPageComponent {

  items: any[] = [
    { shop_name: 'abc', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',amount: '1234',package_name: 'gold',duration_range: '15 days',remaining_days: '2 days', action: 'delete'},
    { shop_name: 'efg', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',amount: '1234',package_name: 'gold',duration_range: '15 days',remaining_days: '2 days', action: 'delete'},
    { shop_name: 'hij', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',amount: '1234',package_name: 'gold',duration_range: '15 days',remaining_days: '2 days', action: 'delete'},
    { shop_name: 'klm', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',amount: '1234',package_name: 'gold',duration_range: '15 days',remaining_days: '2 days', action: 'delete'},
    { shop_name: 'nop', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',amount: '1234',package_name: 'gold',duration_range: '15 days',remaining_days: '2 days', action: 'delete'},
    { shop_name: 'qrs', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',amount: '1234',package_name: 'gold',duration_range: '15 days',remaining_days: '2 days', action: 'delete'},
    { shop_name: 'tuv', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',amount: '1234',package_name: 'gold',duration_range: '15 days',remaining_days: '2 days', action: 'delete'},
    { shop_name: 'wxy', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',amount: '1234',package_name: 'gold',duration_range: '15 days',remaining_days: '2 days', action: 'delete'},
    { shop_name: 'zab', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',amount: '1234',package_name: 'gold',duration_range: '15 days',remaining_days: '2 days', action: 'delete'},
    { shop_name: 'cde', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',amount: '1234',package_name: 'gold',duration_range: '15 days',remaining_days: '2 days', action: 'delete'},
    { shop_name: 'fgh', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',amount: '1234',package_name: 'gold',duration_range: '15 days',remaining_days: '2 days', action: 'delete'},
    { shop_name: 'ijk', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',amount: '1234',package_name: 'gold',duration_range: '15 days',remaining_days: '2 days', action: 'delete'},
    { shop_name: 'lmn', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',amount: '1234',package_name: 'gold',duration_range: '15 days',remaining_days: '2 days', action: 'delete'},
    { shop_name: 'opq', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',amount: '1234',package_name: 'gold',duration_range: '15 days',remaining_days: '2 days', action: 'delete'},
    { shop_name: 'rst', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',amount: '1234',package_name: 'gold',duration_range: '15 days',remaining_days: '2 days', action: 'delete'},
    { shop_name: 'uvw', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',amount: '1234',package_name: 'gold',duration_range: '15 days',remaining_days: '2 days', action: 'delete'},
    { shop_name: 'xyz', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',amount: '1234',package_name: 'gold',duration_range: '15 days',remaining_days: '2 days', action: 'delete'},
    { shop_name: 'abb', physical_address: 'makongo',phone_number: '07162553',shop_address: 'makongo',amount: '1234',package_name: 'gold',duration_range: '15 days',remaining_days: '2 days', action: 'delete'},
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
