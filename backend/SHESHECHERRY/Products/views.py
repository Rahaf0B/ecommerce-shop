from django.shortcuts import render
from datetime import date, datetime, time
from .serializer import *
from rest_framework.generics import GenericAPIView
import json
from rest_framework import response, status, permissions
from users.jwt import JWTAuthentication

# Create your views here.


class getAllProductsAPIView(GenericAPIView):

    queryset = Product.objects.all()

    def get(self, request):
        queryset = Product.objects.all()
        serializer = getProductInfoSerializer(queryset, many=True)
        return response.Response(serializer.data, status=status.HTTP_200_OK)


class getNewestProductAPIView(GenericAPIView):
    queryset = Product.objects.all()

    def get(self, request):

        queryset = Product.objects.all().order_by('-id')[:3]

        serializer = getProductSerializer(queryset, many=True)
        return response.Response(serializer.data, status=status.HTTP_200_OK)


class getAccessoriesProductAPIView(GenericAPIView):
    queryset = Accessories.objects.all()

    def get(self, request):

        queryset = Accessories.objects.all()

        serializer = getAccessoriesSerializer(queryset, many=True)
        return response.Response(serializer.data, status=status.HTTP_200_OK)


class getPerfumeProductAPIView(GenericAPIView):
    queryset = Perfume.objects.all()

    def get(self, request):

        queryset = Perfume.objects.all()

        serializer = getPerfumesSerializer(queryset, many=True)
        return response.Response(serializer.data, status=status.HTTP_200_OK)


class getProductInfoAPIView(GenericAPIView):

    def get(self, request, id, category):

        try:
            if (category == "Perfume"):
                product = Perfume.objects.get(product__id=id)
                serializer = getPerfumesSerializer(product)
            elif (category == "Accessories"):
                product = Accessories.objects.get(product__id=id)
                serializer = getAccessoriesSerializer(product)
            return response.Response(serializer.data, status=status.HTTP_200_OK)
        except:
            return response.Response({"Product Not Found"}, status=status.HTTP_404_NOT_FOUND)


class AddFavoriteProductsAPIView(GenericAPIView):
    permission_classes = ((permissions.IsAuthenticated,))
    authentication_classes = [JWTAuthentication]

    def put(self, request, id):
        product = Product.objects.get(id=id)
        user = request.user
        try:
            FavoriteProductsInstance = FavoriteProducts.objects.get(user=user)
        except:
            FavoriteProductsInstance = FavoriteProducts.objects.create(
                user=user)

        FavoriteProductsInstance.product.add(product)
        FavoriteProductsInstance.save()
        return response.Response({'success': 'Favorite Products added.'}, status=status.HTTP_201_CREATED)


class DeleteFavoriteProductAPIView(GenericAPIView):
    permission_classes = ((permissions.IsAuthenticated,))
    authentication_classes = [JWTAuthentication]

    def put(self, request, id):
        product = Product.objects.get(id=id)
        user = request.user
        try:
            FavoriteProductsInstance = FavoriteProducts.objects.get(
                user=user, product=product)
            FavoriteProductsInstance.product.remove(product)
            FavoriteProductsInstance.save()
        except:
            ...

        return response.Response({'success': 'Favorite Product deleted.'}, status=status.HTTP_201_CREATED)


class GetAllFavoriteProductAPIView(GenericAPIView):
    permission_classes = ((permissions.IsAuthenticated,))
    authentication_classes = [JWTAuthentication]

    def get(self, request):
        user = request.user
        try:
            FavoriteProductsInstance = FavoriteProducts.objects.get(user=user)
            serializer = FavoriteProductSerializer(FavoriteProductsInstance)
            return response.Response(serializer.data, status=status.HTTP_200_OK)
        except:
            return response.Response({'error': 'There is no Favorite Product'}, status=status.HTTP_404_NOT_FOUND)
