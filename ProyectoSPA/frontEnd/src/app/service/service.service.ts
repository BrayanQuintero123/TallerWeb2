import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/rrhh/persona/persona';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }

  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona);
  }

  getPersonabyId(id:number){
    return this.http.get<Persona>(this.Url+"/"+id);
  }

  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/"+persona.id, persona);
  }
}