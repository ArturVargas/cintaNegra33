import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datos;
  constructor() { 
    console.log('Este es el constructor');
    this.miServicio();
  }

  ngOnInit() {
    console.log('Este es el OnInit');
  }

  miServicio () {
    console.log('Cargando data');
    setTimeout( () => {
      console.log('Data cargada')
    }, 3000)
    
  }

}
