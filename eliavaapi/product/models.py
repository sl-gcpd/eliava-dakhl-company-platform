from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(null=False,max_length=255,unique=False)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    inStock = models.IntegerField()
    minQuantity = models.IntegerField()
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='images/', null=True, default = "media/default-product.jpeg")

    COMMON = 'CM'
    FINISHING = 'FS'
    BOX = 'BX'
    ROOFING = 'RF'
    MASONRY = 'MS'
    DOUBLE_HEADED = 'DH'
    DRYWAL = 'DW'
    ANNUAL_RING_SHANK = "RS"
    CARPET = "CP"
    STAPLE = "ST"

    PRODUCT_TYPE_CHOICES = [
        (COMMON, 'Common'),
        (FINISHING, 'Finishing'),
        (BOX, 'Box'),
        (ROOFING, 'Roofing'),
        (MASONRY, 'Massonry'),
        (DOUBLE_HEADED, 'Double headed'),
        (DRYWAL, 'Drywal'),
        (ANNUAL_RING_SHANK, 'Annual rink shank'),
        (CARPET, 'Carpet'),
        (STAPLE, 'Staple'),
    ]
    type = models.CharField(
        max_length=2,
        choices=PRODUCT_TYPE_CHOICES,
        blank=True,
        null=True
    )

    def __str__(self):
        return self.name