from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework import status

from ..middleware import validation_token
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

        if "invalid_token" in validation_token(request).data:
            return Response(validation_token(request).data, status=status.HTTP_401_UNAUTHORIZED)

        users = User.objects.all()
        serializer = AllUserSerializer(users, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def profile(request):
    if request.method == 'GET':

        token_result = validation_token(request).data
        if "invalid_token" in token_result:
            return Response(validation_token(request).data, status=status.HTTP_401_UNAUTHORIZED)

        user_id = token_result['user_id']
        user = User.objects.get(id=user_id)
        serializer = UserSerializer(user)

        return Response(serializer.data)

@api_view(['GET'])
def user_detail(request):
    if request.method == 'GET':

        if "invalid_token" in validation_token(request).data:
            return Response(validation_token(request).data, status=status.HTTP_401_UNAUTHORIZED)

        user_id = request.query_params.get('id')
        user = User.objects.get(id=user_id)
        serializer = UserSerializer(user)

        return Response(serializer.data)