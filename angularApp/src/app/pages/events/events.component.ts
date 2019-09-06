import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  eventForm:FormGroup;
  events = [];
  constructor() {
    this.eventForm = new FormGroup({
      eventName: new FormControl('mievento', [Validators.required]),
      desc: new FormControl('', [Validators.required, Validators.minLength(5)]),
      precio: new FormControl('', [Validators.required])
    })
   }

  ngOnInit() {
  }

  sendForm(){
    console.log(this.eventForm.value);
    this.events.push(this.eventForm.value)
  }

}
