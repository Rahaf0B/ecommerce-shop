from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Product)
admin.site.register(Color)
admin.site.register(Perfume)
admin.site.register(Accessories)
admin.site.register(FavoriteProducts)
