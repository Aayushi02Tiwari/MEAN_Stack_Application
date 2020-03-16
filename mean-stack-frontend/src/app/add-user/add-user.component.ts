import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import List from '../models/list';
import { WebService } from '../web.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap';

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
  title: string;
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
    public bsModalRef: BsModalRef) { }

  ngOnInit() {

    if (this.title == "Add User") {

    } else {
      this.isPathChanged = false;
      this.webService.get('lists/' + this.id)
        .subscribe(((lists: List[]) => {
          this.updateList = lists;
        }));
    }
  }
// Function to save the new data
  save() {
    console.log(this.newUser);
    this.webService.post('lists', this.newUser)
      .subscribe(((lists: List[]) => this.newUser = lists));
    this.bsModalRef.hide();
    window.location.reload();
  }
// Function to update the data
  update(user: any) {
    console.log(user._id)
    this.webService.patch(user._id, user)
      .subscribe(((lists: List[]) => {
        this.newUser = lists;
        this.bsModalRef.hide();
      }));
  }
  dismiss() {
    this.bsModalRef.hide();
  }
}

