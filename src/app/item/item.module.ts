import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { ItemListComponent } from 'src/app/item/components/item-list/item-list.component';
import { UsersEffects } from 'src/app/user/store/users.effects';
import { ItemEditComponent } from './components/item-edit/item-edit.component';
import { ItemsEffects } from './store/item.effects';


@NgModule({
  declarations: [
    ItemListComponent,
    ItemEditComponent
  ],
  exports: [
    ItemListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([ItemsEffects, UsersEffects]),
    FormsModule
  ]
})
export class ItemModule { }
