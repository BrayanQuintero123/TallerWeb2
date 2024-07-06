package com.uis.backSRest.controller;

import com.uis.backSRest.exeption.ResourceNotFoundException;
import com.uis.backSRest.model.Persona;
import com.uis.backSRest.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/rrhh/Persona")
public class PersonaController {
    @Autowired
    private PersonaRepository personaRepository;


    @GetMapping("/Persona")
    public List<Persona> getAllPersonas(){
        return personaRepository.findAll();
    }

    @GetMapping("/Persona/{id}")
    public ResponseEntity<Persona> getByIDPersona(@PathVariable(value = "id") Long PersonaId)
    throws ResourceNotFoundException {
        Persona persona = personaRepository.findById(PersonaId)
                .orElseThrow(() -> new ResourceNotFoundException("no se encuentra la persona con id:: "+PersonaId));
        return ResponseEntity.ok().body(persona);
    }

    @PostMapping("/Persona")
    public Persona createPersona (@Validated @RequestBody Persona persona){
        return personaRepository.save(persona);
    }

    @PutMapping("/Persona/{id}")
    public ResponseEntity<Persona> updatePersona(@PathVariable(value = "id") Long PersonaId,
                                                 @Validated @RequestBody Persona personaDetail)
        throws ResourceNotFoundException{
        Persona persona = personaRepository.findById(PersonaId)
                .orElseThrow(() -> new ResourceNotFoundException("no se encuentra la persona con id:: "+PersonaId));
        persona.setId(personaDetail.getId());
        persona.setNombre(personaDetail.getNombre());
        persona.setApellido(personaDetail.getApellido());
        persona.setLogin(personaDetail.getLogin());
        persona.setPass(personaDetail.getPass());
        final Persona updPersona = personaRepository.save(persona);

        return ResponseEntity.ok().body(updPersona);
    }

    @DeleteMapping("/Persona/{id}")
    public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long personaId)
            throws ResourceNotFoundException {
        Persona persona = personaRepository.findById(personaId)
                .orElseThrow(() -> new ResourceNotFoundException("Persona no encontrada :: " + personaId));

        personaRepository.delete(persona);
        Map<String, Boolean> response = new HashMap<>();
        response.put("borrar", Boolean.TRUE);
        return response;
    }


}
