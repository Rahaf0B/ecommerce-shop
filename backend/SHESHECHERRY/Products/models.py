from django.db import models
from django.utils.translation import gettext_lazy as _
from users.models import User
# Create your models here.


class Color(models.Model):
    color_name = models.CharField(
        _("color_name"), max_length=70, blank=True, null=True)

    def __str__(self):
        return str(self.color_name)


class Product(models.Model):
    productName = models.CharField(
        _("productName"), max_length=70, blank=True, null=True)
    product_pic = models.ImageField(upload_to='images/', blank=True, null=True)
    price = models.FloatField(_("price"), blank=True, null=True)
    description = models.TextField(_("description"), blank=True, null=True)
    quantity = models.IntegerField(_("quantity"), blank=True, null=True)
    product_category = models.CharField(
        _("product_category"), max_length=30, blank=True, null=True)
    added_Date = models.DateField(_("added_Date"), blank=True, null=True)

    def __str__(self):

        return str(self.productName)


class Perfume(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self):

        return str(self.product.productName)


class Accessories(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    product_color = models.ManyToManyField(Color)

    def __str__(self):

        return str(self.product.productName)


class FavoriteProducts(models.Model):
    Favorite_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="UserInstance")
    product = models.ManyToManyField(Product, related_name="FavoriteProduct")
