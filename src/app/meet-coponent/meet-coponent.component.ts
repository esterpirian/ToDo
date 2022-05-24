import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-meet-coponent',
  templateUrl: './meet-coponent.component.html',
  styleUrls: ['./meet-coponent.component.css']
})
export class MeetCoponentComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
