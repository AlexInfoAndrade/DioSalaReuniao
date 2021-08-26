import { DetailRoomsComponent } from './rooms/detail-rooms/detail-rooms.component';
import { RouterModule, Routes } from "@angular/router";
import { ListRoomsComponent } from "./rooms/list-rooms/list-rooms.component";
import { RegistrationRoomsComponent } from "./rooms/registration-rooms/registration-rooms.component";
import { NgModule } from '@angular/core';
import { RoomsModule } from './rooms/rooms.module';

const routes : Routes = [
  {
    path: '',
    redirectTo: 'salas',
    pathMatch: 'full'
  },
  {
    path: 'salas',
    children: [
      {
        path: '',
        component: ListRoomsComponent
      },
      {
        path: 'nova',
        component: RegistrationRoomsComponent
      },
      {
        path: 'editar',
        children: [
          {
            path: ':id',
            component: RegistrationRoomsComponent
          }
        ]
      },
      {
        path: ':id',
        component: DetailRoomsComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'salas'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RoomsModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
