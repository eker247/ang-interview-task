import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/item/models/item.model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {
  response: { save: (item: Item) => void, cancel: () => void };
  dialogVisible: boolean;
  itemForm: FormGroup;
  item: Item;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: [''],
    });
  }

  async open(item: Item = {} as Item): Promise<Item> {
    this.dialogVisible = true;
    this.setFormValue(item);
    return new Promise((resolve, reject) => {
      this.response = {
        save: (item: Item) => resolve(item),
        cancel: () => reject('USER CANCELED')
      }
    });
  }

  setFormValue(item: Item): void {
    this.item = item;
    this.itemForm.patchValue({ title: item.title, content: item.content });
  }

  save() {
    this.dialogVisible = false;
    this.response.save({ id: this.item.id, ...this.itemForm.value });
  }

  cancel() {
    this.dialogVisible = false;
    this.response.cancel();
  }
}
