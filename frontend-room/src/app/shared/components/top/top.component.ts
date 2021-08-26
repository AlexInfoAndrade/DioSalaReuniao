import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  @ViewChild('sidenav', {static: false}) sidenav?: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

  openSideNav() {
    this.sidenav?.open();
  }

  closeSideNav() {
    this.sidenav?.close();
  }
}
