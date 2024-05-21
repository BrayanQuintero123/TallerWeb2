from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
# Create your views here.

from django.shortcuts import render
from .models import persona

def index(request):
    persona = persona.objects.all()
    template = loader.get_template('persona/index.html')
    context = {
        'persona': persona,
    }
    return HttpResponse(template.render(context, request))

def home(request):
    template = loader.get_template('index.html')
    context = {}
    return HttpResponse(template.render(context, request))

#def index(request):
#    return render(request, 'index.html')