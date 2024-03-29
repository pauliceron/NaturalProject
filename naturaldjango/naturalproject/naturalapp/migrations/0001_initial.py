# Generated by Django 4.2.1 on 2024-02-09 15:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Empresa',
            fields=[
                ('id', models.AutoField(db_column='idEmpresa', primary_key=True, serialize=False)),
                ('tipoTurismo', models.CharField(choices=[('Terrestre', 'Terrestre'), ('Acuatico', 'Acuatico'), ('Ambos', 'Ambos')], max_length=45)),
                ('encargadoEmpresa', models.CharField(max_length=45)),
                ('ubicacionEmpresa', models.CharField(max_length=45)),
                ('numeroContacto', models.CharField(max_length=45)),
                ('multimedia', models.CharField(max_length=45)),
            ],
            options={
                'db_table': 'Empresa',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('Email', models.CharField(max_length=45, primary_key=True, serialize=False)),
                ('Contraseña', models.CharField(max_length=45)),
            ],
            options={
                'db_table': 'Usuario',
                'managed': False,
            },
        ),
    ]
