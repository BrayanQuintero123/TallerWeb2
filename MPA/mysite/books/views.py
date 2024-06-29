from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from .models import Author,Books,Category
from .forms import AutorForm,LibroForm,CategoriaForm
from django.urls import reverse

def index(request):
    autores=Author.objects.all()
    template = loader.get_template('books/index.html')
    context = {
        'autores':autores,
    }
    return HttpResponse(template.render(context, request))

def home(request):
    template=loader.get_template('index.html')
    context={}
    return HttpResponse(template.render(context,request))

def authors(request):
    autores=Author.objects.all()
    template=loader.get_template('books/authors.html')
    context={'autores':autores,}
    return HttpResponse(template.render(context,request))

def new_author(request):
    if request.method == 'POST':
        form = AutorForm(request.POST)

        if form.is_valid():
            nombre = form.cleaned_data['first_name']
            apellido = form.cleaned_data['last_name']
            pais  = form.cleaned_data['country']
            author = Author(first_name=nombre,last_name=apellido,country=pais)
            author.save()
            return HttpResponseRedirect(reverse('authors'))
    
    else:
        form = AutorForm()

    return render(request, 'books/create_authors.html', {'form':form})

def books(request):
    libros = Books.objects.all()
    template = loader.get_template('books/books.html')
    context = {'libros':libros,}
    return HttpResponse(template.render(context,request))

def new_book(request):
    if request.method == 'POST':
        form = LibroForm(request.POST)

        if form.is_valid():
            autor = form.cleaned_data['author']
            categoria = form.cleaned_data['category']
            titulo  = form.cleaned_data['title']
            descripcion = form.cleaned_data['description']
            book = Books(author=autor,category=categoria,title=titulo,description=descripcion)
            book.save()
            return HttpResponseRedirect(reverse('books'))
    
    else:
        form = LibroForm()

    return render(request, 'books/create_books.html', {'form':form})

def new_category(request):
    if request.method == 'POST':
        form = CategoriaForm(request.POST)

        if form.is_valid():
            nombre = form.cleaned_data['name']
            category = Category(name=nombre)
            category.save()
            return HttpResponseRedirect(reverse('home'))
    
    else:
        form = CategoriaForm()

    return render(request, 'books/new_category.html', {'form':form})

def buscar(request):
    if request.method == 'GET':
        autor_id = request.GET.get('autor_id')
        categoria = request.GET.get('categoria')
        
        libros = Books.objects.all()
        autores = Author.objects.all()
        categorias = Category.objects.all()

        if autor_id:
            libros = libros.filter(author__id=autor_id)
        
        if categoria:
            libros = libros.filter(category=categoria)

        return render(request, 'books/buscar.html', {'libros': libros,'autores':autores,'categorias':categorias})
    
    return render(request, 'books/buscar.html')
