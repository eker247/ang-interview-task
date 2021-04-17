import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { UserSwitchComponent } from './components/user-switch/user-switch.component';
import { UsersEffects } from './store/users.effects';



@NgModule({
  declarations: [UserSwitchComponent],
  exports: [
    UserSwitchComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([UsersEffects]),
    FormsModule
  ]
})
export class UserModule { }
