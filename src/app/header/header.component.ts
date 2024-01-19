import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: any = ""

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem("currentUser")) {
      this.userName = localStorage.getItem("currentUser")
    }
    else {
      this.userName = ""
    }

    
  }
  clearLocalStorage() {
    localStorage.clear();
  }
}
