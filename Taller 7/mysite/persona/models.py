from django.db import models

# Create your models here.

class tipodocumento(models.Model):
    nombretipodocumento = models.CharField(max_length=50, verbose_name='Nombre tipo documento')
    descripciontipodocumento = models.CharField(max_length=100, verbose_name='Descripcion tipo documento')

class ciudad(models.Model):
    nombreciudad = models.CharField(max_length=50, verbose_name='Nombre ciudad')
    descripcionciudad = models.CharField(max_length=100, verbose_name='Descripcion ciudad')

class persona(models.Model):
    idtipodocumento = models.ForeignKey(tipodocumento, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=50, verbose_name='nombre')
    apellido = models.CharField(max_length=50, verbose_name='apellido')
    documento = models.CharField(max_length=50, verbose_name='documento')
    lugarresidencia = models.ForeignKey(ciudad, on_delete=models.CASCADE)
    telefono = models.CharField(max_length=50, verbose_name='Telefono')
    fechanacimiento = models.DateField(verbose_name='Fecha nacimiento')
    email = models.CharField(max_length=50, verbose_name='Email')
    usuario = models.CharField(max_length=50, verbose_name='Usuario')
    clave = models.CharField(max_length=50, verbose_name='Clave')