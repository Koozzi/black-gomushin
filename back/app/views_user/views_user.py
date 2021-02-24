from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token

from ..serializers import *
from ..models import *

import time
import random

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


@api_view(['GET'])
def users(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def user_detail(request, username):
    if request.method == 'GET':
        user = User.objects.get(username=username)
        serializer = UserSerializer(user)
        return Response(serializer.data)

