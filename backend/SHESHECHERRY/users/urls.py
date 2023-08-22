from . import views
from django.urls import path,include
from rest_framework import routers


urlpatterns = [

path('createAccount/',views.RegisterNutritionistUserAPIView.as_view(),name='products'),
path('login/',views.LoginAPIView.as_view(),name='newProducts'),
path('logout/',views.logoutAPIView.as_view(),name='newProducts'),

]