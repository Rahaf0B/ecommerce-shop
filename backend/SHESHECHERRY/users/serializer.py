
from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=120, min_length=6, write_only=True)

    class Meta:
        model = User
        fields = ('username', 'user_id', 'date_of_birth',
                  'gender',  'email', 'password', 'age', 'token')
        read_only_fields = ['age', 'token', 'user_id']


class RegisterUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'user_id', 'date_of_birth',
                  'gender',  'email', 'password', 'age', 'token')
        read_only_fields = ['age', 'token', 'user_id']

    def create(self, validated_data):
        user = User.objects.create_user(username=validated_data['username'],
                                        date_of_birth=validated_data['date_of_birth'], gender=validated_data['gender'], email=validated_data['email'], password=validated_data['password'])
        return user


class LoginSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=120, min_length=6, write_only=True)

    class Meta():
        model = User
        fields = ('email', 'password', 'token')
        read_only_fields = ['token']


class logoutUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('is_active', 'token')
        read_only_fields = ['token']
