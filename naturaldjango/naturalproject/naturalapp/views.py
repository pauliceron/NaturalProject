from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate 
from django.contrib.auth.forms import AuthenticationForm
from django.http import HttpResponse
from .models import *
from django.shortcuts import get_object_or_404

# Create your views here.
def Formulario(request):

    if request.method == 'POST':
        vtipoTurismo = request.POST.get('tipoTurismo','')
        vencargadoEmpresa = request.POST.get('EncargadoEmpresa','')
        vubicacionEmpresa = request.POST.get('ubicacionEmpresa','')
        vnumeroContacto = request.POST.get('numeroContacto','')

        empresa = Empresa(ubicacionEmpresa = vubicacionEmpresa,
                          numeroContacto = vnumeroContacto,
                          encargadoEmpresa = vencargadoEmpresa,
                          tipoTurismo = vtipoTurismo,
                          
                          )
        
        empresa.save()
        return redirect('NaturarlHands')

    return render(request, "Formulario.html")

def RegistroUsuario(request):
    #La infor del formulario
    if request.method == 'POST':
        vEmail = request.POST.get('Email','')
        vContraseña = request.POST.get('Contraseña','')

        usuario = Usuario(Email = vEmail,
                          Contraseña = vContraseña,)
        usuario.save()
        #usuario= Usuario.objects.create(Email=vEmail, Contraseña=vContraseña)
        return redirect('NaturarlHands')

        #return redirect('Formulario.html')
    return render(request, 'RegistroUsuario.html')

def NaturarlHands(request):
    return render(request, "NaturarlHands.html")