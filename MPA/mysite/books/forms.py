from django import forms
from .models import Author,Category,Books

class AutorForm(forms.ModelForm):
    class Meta:
        model = Author

        fields = [
            'first_name',
            'last_name',
            'country',
        ]
        
        labels = {
            'first_name' : 'Nombre',
            'last_name' : 'Apellido',
            'country' : 'Pais',
        }
        widgets = {
            'first_name': forms.TextInput(attrs={'class':'form-control','required':''}),
            'last_name': forms.TextInput(attrs={'class':'form-control','required':''}),
            'country': forms.TextInput(attrs={'class':'form-control','required':''}),
        }

class LibroForm(forms.ModelForm):
    author = forms.ModelChoiceField(queryset=Author.objects.all())
    category = forms.ModelChoiceField(queryset=Category.objects.all())

    class Meta:
        model = Books

        fields = [
            'author',
            'category',
            'title',
            'description',
        ]

        labels = {
            'title' : 'Titulo',
            'description' : 'Descripcion',
        }

        widgets = {
            'title': forms.TextInput(attrs={'class':'form-control','required':''}),
            'description': forms.TextInput(attrs={'class':'form-control','required':''}),
        }

class CategoriaForm(forms.ModelForm):
    class Meta:
        model = Category

        fields = [
            'name',
        ]

        labels = {
            'name' : 'Categoría'
        }

        widgets = {
            'name': forms.TextInput(attrs={'class':'form-control','required':''}),
        }