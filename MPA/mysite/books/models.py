from django.db import models

class Author(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    country = models.CharField(max_length=30)
    def __str__(self):
        return self.first_name+' '+self.last_name

class Category(models.Model):
    name = models.CharField(max_length=30)
    def __str__(self):
        return self.name

class Books(models.Model):
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=500)