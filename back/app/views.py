from rest_framework import viewsets
from .serializers import *
from .models import *

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token


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


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ItemView(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer