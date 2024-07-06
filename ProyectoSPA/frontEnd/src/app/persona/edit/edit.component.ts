import { Component, OnInit } from '@angular/core';
import { Persona } from '../../modelo/Persona';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  persona:Persona = new Persona();

  constructor(private router:Router, private service:ServiceService){}

  ngOnInit(): void {
      this.Edit;
  }

  Edit(){
    let id = localStorage.getItem("id");
    this.service.getPersonabyId(+id)
    .subscribe(data=>{this.persona = data});
  }

  Actualizar(persona:Persona){
    this.service.updatePersona(persona)
    .subscribe(data=>{
      alert("Se ha actualizado correctamente!!..");
      this.router.navigate(["list"]);
    })
  }
}