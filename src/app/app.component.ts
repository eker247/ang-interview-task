import { Component, OnInit } from '@angular/core';
import { ItemApiService } from 'src/app/item/services/item-api.service';
import { UserService } from './user/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  list: any[] = [
    'listItem1',
    'listItem2',
    'listItem3',
  ];

  constructor(public userService: UserService, private itemApiService: ItemApiService) { }

  ngOnInit() {
    this.itemApiService.setItemsInLocalStorage();
  }
}
