from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(null=False,max_length=255,unique=False)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    inStock = models.IntegerField()
    minQuantity = models.IntegerField()
    description =  models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='images/', null = True)

