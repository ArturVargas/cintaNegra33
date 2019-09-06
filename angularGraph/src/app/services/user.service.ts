import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import { User } from '../graphql/user.graphql';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient, 
    private apollo: Apollo) { }

    register(user:any){
      //const url = URL_BASE
      return this.apollo.mutate({
        mutation: User.register,
          variables: {
            user: user
          }
      })
    };

    login(user:any){
      return this.apollo.mutate({
        mutation: User.login,
        variables: {
          user: user
        }
      }).pipe(map( (res:any) => {
          return res.data.login
      }))
    }
}
