from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('index/', views.index, name='index'),
    path('authors/', views.authors, name='authors'),
    path('authors/new/', views.new_author, name='new_authors'),
    path('books/', views.books, name='books'),
    path('books/new/', views.new_book, name='new_book'),
    path('category/', views.new_category, name='new_category'),
    path('buscar/', views.buscar, name='buscar'),
]
