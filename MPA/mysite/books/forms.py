from django import forms
from .models import Author

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