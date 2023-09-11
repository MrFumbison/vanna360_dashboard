import { Component,OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vanna360_dashboard';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
      
  }
  
  //Sidebar toggle show hide function
    status = false;
    searchtext: any;
    addToggle()
      {
        this.status = !this.status;       
      }

    get isLoggedIn(): boolean {
      return this.authService.getIsLoggedIn();
}

}
