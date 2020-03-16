import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import List from '../models/list';
import { WebService } from '../web.service';
import { BsModalService } from 'ngx-bootstrap';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  lists: List[] = [];
  constructor(private webService: WebService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.webService.get('lists')
      .subscribe((lists: List[]) => this.lists = lists);
  }

  // FUnction to delete the data
  deleteTask(id: any) {
    console.log(id);
    this.webService.delete(id)
      .subscribe((res) => {
        this.lists = this.lists.filter((obj) => obj._id != id)
      });
  }

  addUser() {
    const config = {
      initialState: { editMode: false, title: 'Add User' }
    };
    this.openModal(config);
  }

  editUser(id: number) {
    const config = {
      initialState: { editMode: true, title: 'Edit User', id }
    };
    this.openModal(config);
  }

  private openModal(config: {}) {
    const modalRef = this.modalService.show(AddUserComponent, config);
    modalRef.content.onDismiss.subscribe((data) => {
    });
  }
}



