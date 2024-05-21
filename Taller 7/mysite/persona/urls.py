from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('persona/', views.index, name='index'),
]