import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../shared/model/room'

const url = 'http://localhost:8081/api/v1/rooms/';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  saveRoom(room: Room): Observable<any> {
    return this.http.post<any>(url, room);
  }

  editRoom(room: Room): Observable<any> {
    return this.http.put<any>(url + room.id, room);
  }

  listRoom(): Observable<Room[]> {
    return this.http.get<Room[]>(url);
  }

  detailRoom(id: number): Observable<Room> {
    return this.http.get<Room>(url + id);
  }

  deleteRoom(id: number): Observable<void> {
    return this.http.delete<void>(url + id);
  }
}
