from rest_framework import serializers
from .models import *


class getProductInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'


class ColorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Color
        fields = ("color_name",)  # '__all__'


class getProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'productName', 'product_pic',
                  'price', 'product_category')


class getPerfumesSerializer(serializers.ModelSerializer):
    product = getProductInfoSerializer(required=True)

    class Meta:
        model = Perfume
        fields = ('product',)


class getAccessoriesSerializer(serializers.ModelSerializer):
    product = getProductInfoSerializer(required=True)
    product_color = ColorSerializer(required=True, many=True)

    class Meta:
        model = Accessories
        fields = ('product', 'product_color')


class FavoriteProductSerializer(serializers.ModelSerializer):
    product = getProductInfoSerializer(required=True, many=True)

    class Meta:
        model = FavoriteProducts
        fields = ('product',)
