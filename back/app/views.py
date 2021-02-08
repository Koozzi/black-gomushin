from django.shortcuts import get_object_or_404, get_list_or_404

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view, action
from rest_framework.authtoken.models import Token
from rest_framework.serializers import Serializer

from .serializers import *
from .models import *

@api_view(['POST'])
def registration_view(request):
    
    if request.method == 'POST':
        serializer = RegisterationSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            user = serializer.save()
            data['response'] = "Registerd succesfully"
            data['username'] = user.username
            token = Token.objects.get(user=user).key
            data['token'] = token 

        else:
            data = serializer.errors
        return Response(data)

# /users
@api_view(['GET'])
def users(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

# /users/<username>
@api_view(['GET'])
def user_detail(request, username):
    if request.method == 'GET':
        user = User.objects.get(username=username)
        serializer = UserSerializer(user)
        return Response(serializer.data)

# /items
@api_view(['GET'])
def items(request):
    if request.method == 'GET':
        items = Item.objects.all()
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data) 

# /wishlist/<user_id>
@api_view(['GET'])
def wanted_item(request, id):
    if request.method == 'GET':
        instances = WantedItem.objects.select_related('item').filter(username=id)

        item_list = []
        for instance in instances:
            item = Item.objects.get(id=instance.item.id)
            item_list.append(item)

        serializer = ItemSerializer(item_list, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
def hello_world(request):
    if request.method == 'POST':
        return Response({"message": "Got some data!", "data": request.data})
    return Response({"message": "Hello, world!"})