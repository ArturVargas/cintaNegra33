import { Component, OnInit } from '@angular/core';
import { DataService } from '../../servicios/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events=[];
  constructor(private dataSvc: DataService) { }

  ngOnInit() {
    this.dataSvc.getPosts()
      .subscribe((data:any) => {
        console.log(data);
        this.events = data;
      })
  }

}
