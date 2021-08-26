import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/core/room.service';
import { Room } from 'src/app/shared/model/room';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.css']
})
export class ListRoomsComponent implements OnInit {

  rooms: Room[] = [];

  constructor(private roomService: RoomService, private router: Router) { }

  ngOnInit(): void {
    this.loadListRoom();
  }

  private loadListRoom(): void {
    this.roomService.listRoom().subscribe(
      (rooms) => this.rooms = rooms,
      (error) => console.log(error)
    );
  }

  detail(id: number | undefined): void {
    this.router.navigateByUrl(`/salas/${id}`);
  }

}
