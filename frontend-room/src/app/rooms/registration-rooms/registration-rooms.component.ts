import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/core/room.service';
import { Room } from 'src/app/shared/model/room';
import { ValidarService } from '../validar.service';

@Component({
  selector: 'app-registration-rooms',
  templateUrl: './registration-rooms.component.html',
  styleUrls: ['./registration-rooms.component.css']
})
export class RegistrationRoomsComponent implements OnInit {

  id: number | undefined;
  formRoom: FormGroup;

  constructor(private fb: FormBuilder,
              private roomService: RoomService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              public validar: ValidarService) {

    this.formRoom = this.fb.group({
      name: [''],
      date: [''],
      startHour: [''],
      endHour: ['']
    });
  }

  get formControls() {
    return this.formRoom.controls;
  }

  formControl(controlName: string): AbstractControl {
    return this.formControls[controlName];
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.roomService.detailRoom(this.id).subscribe(
        (room) => this.loadForm(room)
      );
    }else {
      this.loadForm(this.roomEmpty());
    }
  }

  submit():void {
    this.formRoom.markAllAsTouched();
    if(this.formRoom.invalid){
      return;
    }

    const room = this.formRoom.getRawValue() as Room;
    if(this.id){
      room.id = this.id;
      this.editar(room);
    }else {
      this.salvar(room);
    }
  }

  resetForm(): void {
    this.formRoom.reset();
  }

  private salvar(room: Room): void {
    this.roomService.saveRoom(room).subscribe(
      (response) => alert(response.msg),
      (error) => {
        console.log(error);
        alert(error.msg);
      }
    );
  }

  private editar(room: Room): void {
    this.roomService.editRoom(room).subscribe(
      (response) => {
        alert(response.msg);
        this.router.navigateByUrl('/salas');
      },
      (error) => {
        console.log(error);
        alert(error.msg);
      }
    );
  }

  private loadForm(room: Room): void {
    const date = new Date(room.date);
    date.setDate(date.getUTCDate());

    this.formRoom = this.fb.group({
      name: [room.name, [Validators.required, Validators.minLength(3)]],
      date: [date, [Validators.required]],
      startHour: [room.startHour],
      endHour: [room.endHour]
    });
  }

  private roomEmpty(): Room {
    return {
      id: undefined,
      name: '',
      date: '',
      startHour: undefined,
      endHour: undefined
    }
  }

}
