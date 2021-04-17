import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemEditComponent } from 'src/app/item/components/item-edit/item-edit.component';
import { Item } from 'src/app/item/models/item.model';
import { ItemService } from 'src/app/item/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @ViewChild('itemEditDialog') itemEditDialog: ItemEditComponent;
  items$: Observable<Item[]>;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.items$ = this.itemService.getItems();
  }

  async editItem(item: Item = {} as Item): Promise<void> {
    try {
      const editedItem = await this.itemEditDialog.open(item);
      this.itemService.saveItem(editedItem);
    } catch (err) { }
  }

  removeItem(item: Item): void {
    this.itemService.removeItem(item.id);
  }
}
