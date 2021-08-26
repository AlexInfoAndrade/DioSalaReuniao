import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoomsComponent } from './registration-rooms/registration-rooms.component';
import { ListRoomsComponent } from './list-rooms/list-rooms.component';
import { DetailRoomsComponent } from './detail-rooms/detail-rooms.component';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistrationRoomsComponent,
    ListRoomsComponent,
    DetailRoomsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    RegistrationRoomsComponent,
    ListRoomsComponent,
    DetailRoomsComponent
  ]
})
export class RoomsModule { }
