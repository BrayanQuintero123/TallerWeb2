import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontEnd';
  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["list"]);
  }

  Crear(){
    this.router.navigate(["add"]);
  }
}