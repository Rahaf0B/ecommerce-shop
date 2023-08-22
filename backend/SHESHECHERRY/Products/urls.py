from . import views
from django.urls import path, include
from rest_framework import routers


urlpatterns = [

    path('products/', views.getAllProductsAPIView.as_view(), name='products'),
    path('newProducts/', views.getNewestProductAPIView.as_view(), name='newProducts'),
    path('Accessories/', views.getAccessoriesProductAPIView.as_view(),
         name='newProducts'),
    path('Perfume/', views.getPerfumeProductAPIView.as_view(), name='newProducts'),
    path('productInfo/<int:id>/<str:category>',
         views.getProductInfoAPIView.as_view(), name='productInfo'),
    path('addFavorite/<int:id>/',
         views.AddFavoriteProductsAPIView.as_view(), name='addFavorite'),
    path('deleteFavoriteProduct/<int:id>/',
         views.DeleteFavoriteProductAPIView.as_view(), name='deleteFavoriteProduct'),
    path('getFavorite', views.GetAllFavoriteProductAPIView.as_view(),
         name='getFavorite'),


]
