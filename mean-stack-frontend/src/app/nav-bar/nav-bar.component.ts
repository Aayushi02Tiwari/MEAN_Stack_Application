import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  rightNavLinks(){
    return [
      {
         img: '../../assets/ico_notification.svg',
         title: '',
         isActive: false
      },
      {
         img: '../../assets/ico_user.svg',
         title: 'John Smith',
         isActive: false
      },
      {
         img: '../../assets/ico_downarrow.svg',
         title: '',
         isActive: false
      }
      ]
  }

  navLinks(){
    return [
      {
         img: '../../assets/ico_dashboard.svg',
         title: 'Dashboard',
         isActive: false
      },
      {
         img: '../../assets/ico_users.svg',
         title: 'Users',
         isActive: true
      },
      {
         img: '../../assets/ico_sessionmanager.svg',
         title: 'Session Manager',
         isActive: false
      }
      ]
  }

}
