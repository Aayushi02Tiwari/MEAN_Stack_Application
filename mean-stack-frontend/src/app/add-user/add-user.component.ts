import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import List from '../models/list';
import { WebService } from '../web.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {


  newUser: any = {
    "name": "",
    "email": "",
    "mobile": "",
    "roleType": "",
    "status": ""
  };
  lists: List[] = [];
  path: any;
  isPathChanged: boolean = true;
  id: any;
  updateList: any = [{
    "name": "",
    "email": "",
    "mobile": "",
    "roleType": "",
    "status": ""
  }];

  constructor(private webService: WebService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.path = this.router.url;
    this.id = this.router.url;
    this.id = this.id.substring(14)
    console.log(this.id);
    if (this.path == "/app-add-user/0") {
      this.path = "Add User";
    }
    else {

      this.path = "Update User";
      this.isPathChanged = false;

      this.webService.get('lists/' + this.id)
        .subscribe(((lists: List[]) => {
          this.updateList = lists;
          // console.log(this.newUser);
        }));
    }
  }

  save() {
    console.log(this.newUser);
    this.webService.post('lists', this.newUser)
      .subscribe(((lists: List[]) => this.newUser = lists));
  }

  update() {
    console.log(this.id)
    this.webService.patch(this.id, this.newUser)
      .subscribe(((lists: List[]) => this.newUser = lists));
  }

}

