import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import List from '../models/list';
import { WebService } from '../web.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  lists: List[] = [];
  listId: string;
  constructor(private webService: WebService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.webService.get('lists')
      .subscribe((lists: List[]) => this.lists = lists);

    // this.route.params.subscribe((params: Params) => {
    //   this.listId = params.listId;

    // });
  }



  deleteTask(id: any) {

    console.log(id);
    this.webService.delete(id)
      .subscribe((res) => {
        this.lists = this.lists.filter((obj) => obj._id != id)
      });

  }

  temp(){

  }

}



