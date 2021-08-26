import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/core/room.service';
import { Room } from 'src/app/shared/model/room';

@Component({
  selector: 'app-detail-rooms',
  templateUrl: './detail-rooms.component.html',
  styleUrls: ['./detail-rooms.component.css']
})
export class DetailRoomsComponent implements OnInit {

  room?: Room;
  id: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private roomService: RoomService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.carregar();
  }

  editar(): void {
    this.router.navigateByUrl(`/salas/editar/${this.id}`);
  }

  excluir(): void {
    this.roomService.deleteRoom(this.id).subscribe(
      () => this.router.navigateByUrl('/salas')
    );
  }

  private carregar(): void {
    this.roomService.detailRoom(this.id).subscribe(
      (room) => this.room = room,
      (error) => console.log(error)
    );
  }
}
