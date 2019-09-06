import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userSvc: UserService) { }

  ngOnInit() {
  }

  register() {
    const user = {
      name: 'angularUser',
      email: 'angular@email.com',
      password: '123456'
    }
    this.userSvc.register(user)
      .subscribe(data => {
        console.log(data);
      }, (err) => {
        console.log(err);
      })
  }

  login() {
    const user = {
      email: 'angular@email.com',
      password: '123456'
    }
    this.userSvc.login(user)
      .subscribe( (data:any) => {
        console.log(data);
        let token = data.token;
        if(token){
          localStorage.setItem('token', token)
        }
      }, (err) => {
        console.log(err);
      })
  }

}
