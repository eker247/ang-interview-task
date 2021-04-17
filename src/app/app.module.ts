import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ItemModule } from 'src/app/item/item.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducer as itemReducer } from './item/store/item.reducer';
import { reducer } from './user/store/users.reducer';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ItemModule,
    UserModule,
    FormsModule,
    StoreModule.forRoot({ users: reducer, items: itemReducer }, {}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
