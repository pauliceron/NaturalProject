from django.db import models

class Usuario(models.Model):
    Email = models.CharField(max_length=45, primary_key=True, unique=True)
    Contraseña = models.CharField(max_length=45)
    class Meta:
        managed = False
        db_table = 'Usuario'

class Empresa(models.Model):
    tipoTurismo_choices = [
        ('Terrestre', 'Terrestre'),
        ('Acuatico', 'Acuatico'),
        ('Ambos', 'Ambos'),
    ]
    id = models.AutoField(primary_key=True, db_column='idEmpresa')
    tipoTurismo = models.CharField(max_length=45, choices=tipoTurismo_choices)
    encargadoEmpresa = models.CharField(max_length=45)
    ubicacionEmpresa = models.CharField(max_length=45)
    numeroContacto = models.CharField(max_length=45)
    multimedia = models.FileField(upload_to='multimedia')  # Adjust the upload_to path as needed
    Usuario_Email = models.ForeignKey(Usuario, on_delete=models.CASCADE, db_column='Usuario_Email')

    class Meta:
        managed = False
        db_table = 'Empresa'
