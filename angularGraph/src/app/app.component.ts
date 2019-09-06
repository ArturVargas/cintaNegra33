import { Component } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularGraph';

  constructor(private apollo: Apollo){ }

  ngOnInit() {
    // this.apollo.watchQuery({
    //   query: gql `
    //     {
    //       getAllEvents{
    //         _id
    //         eventName
    //       }
    //     }
    //   `,
    // }).valueChanges.subscribe(data => {
    //   console.log(data);
      
    // })
  }
}
