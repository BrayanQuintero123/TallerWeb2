import { Component, OnInit } from '@angular/core';
import { Persona } from '../../modelo/Persona';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  
  personas:Persona[];

  constructor(private service:ServiceService, private router:Router){}

  ngOnInit(): void {
      this.service.getPersonas()
      .subscribe(data=>{this.personas= data;
      })
  }

  Edit(persona:Persona){
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["edit"]);
  }
}