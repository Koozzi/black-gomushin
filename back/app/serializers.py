from rest_framework import serializers
from .models import *


class RegisterationSerializer(serializers.ModelSerializer):

    password2 = serializers.CharField(style={'input_type':'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['username', 'password', 'password2']
        extra_kwargs = {'password': {'write_only': True}}

    def save(self):
        user = User(username = self.validated_data['username'])
        print(user)
        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError({'password': 'Not matched'})
        
        user.set_password(password)
        user.save()
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class UsernameSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username']


class ItemSerializer(serializers.ModelSerializer):
    sell_username = UsernameSerializer(many=False, read_only=True)
    class Meta:
        model = Item
        fields = '__all__'
    
class NewItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['title', 'content', 'price', 'sell_username', 'size']