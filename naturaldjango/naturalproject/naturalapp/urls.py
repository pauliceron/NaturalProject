from django.urls import path, include
from django.contrib import admin
from . import views

urlpatterns=[
    path('Formulario/',views.Formulario, name='Formulario'),
    path('RegistroUsuario/',views.RegistroUsuario, name='RegistroUsuario'),
    path('NaturarlHands/',views.NaturarlHands, name = "NaturarlHands"),
    path('',views.NaturarlHands, name = "NaturarlHands"),

]