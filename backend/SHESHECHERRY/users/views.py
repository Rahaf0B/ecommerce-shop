from django.shortcuts import render
from .serializer import *
from .models import *
from .jwt import JWTAuthentication
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework import response, status, permissions
from rest_framework import generics


# Create your views here.


class LoginAPIView(GenericAPIView):

    serializer_class = LoginSerializer

    def post(self, request):
        email = request.data.get('email', None)
        password = request.data.get('password', None)

        user = authenticate(username=email, password=password)
        if user:
            serializer = self.serializer_class(
                user, context={'request': request})
            user.is_online = True
            user.save()
            return response.Response(serializer.data, status=status.HTTP_200_OK)
        return response.Response({'message': 'Invalid credentials, try again'}, status=status.HTTP_401_UNAUTHORIZED)


class RegisterNutritionistUserAPIView(GenericAPIView):
    serializer_class = RegisterUserSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)

        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class logoutAPIView(GenericAPIView):
    serializer_class = logoutUserSerializer
    permission_classes = ((permissions.IsAuthenticated,))
    authentication_classes = [JWTAuthentication]

    def post(self, request, id):
        user = User.objects.get(user_id=id)
        user.is_online = False
        user.save()

        serializer = self.serializer_class(user)

        return response.Response(serializer.data)
