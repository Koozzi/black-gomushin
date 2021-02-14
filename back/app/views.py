from django.shortcuts import get_object_or_404, get_list_or_404

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view, action
from rest_framework.authtoken.models import Token
from rest_framework.serializers import Serializer

from .serializers import *
from .models import *
from .middleware import validation_token

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

        if "invalid_token" in validation_token(request).data:
            return Response(validation_token(request).data)
        
        items = Item.objects.all()
        serializer = ItemSerializer(items, many=True)

        for data in serializer.data:
            username = User.objects.get(id=data['sell_username']).username
            data['sell_user_id'] = data['sell_username']
            data['sell_username'] = username

        return Response(serializer.data) 


# items/<int:pk>        
@api_view(['GET'])
def item_detail(request, pk):
    if request.method == 'GET':

        if "invalid_token" in validation_token(request).data:
            return Response(validation_token(request).data)

        item = Item.objects.get(id=pk)
        serializer = ItemSerializer(item)
        
        item_detail = serializer.data
        # serializer.data is a property of the class and therefore immutable
        # 새로운 dictionary에 복사해서 데이터를 처리한다.

        username = User.objects.get(id=serializer.data['sell_username']).username
        user_id = serializer.data['sell_username']

        item_detail['sell_username'] = username
        item_detail['sell_user_id'] = user_id

        return Response(item_detail)


# 배포용은 아니다. 나중에 수정을 해야한다.
# 현재 로컬에서 아이템을 쉽게 추가하기 위해서 만든 함수이다.
@api_view(['POST'])
def new_item(request):
    if request.method == 'POST':
        
        if "invalid_token" in validation_token(request).data:
            return Response(validation_token(request).data)
        
        serializer = NewItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "정상적으로 등록이 됨."})
        else:
            return Response({"message": "정확하게 입력하셈!!"})


# /wishlist/<user_id>
@api_view(['GET'])
def wanted_item(request, id):
    if request.method == 'GET':
        if "invalid_token" in validation_token(request).data:
            return Response(validation_token(request).data)
            
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