package com.uis.backSRest.model;

import jakarta.persistence.*;
import jakarta.persistence.Table;


@Entity
@Table(name = "persona", schema = "clase")
public class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "nombre", nullable = false)
    private String nombre;
    @Column(name = "apellido", nullable = false)
    private String apellido;
    @Column(name = "login", nullable = false)
    private String login;
    @Column(name = "pass", nullable = false)
    private String pass;

    public Persona() {
    }

    public Persona(String nombre, String apellido, String login, String pass) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.login = login;
        this.pass = pass;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }
}
