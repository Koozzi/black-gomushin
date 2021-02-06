from rest_framework import viewsets
from .serializers import *
from .models import *


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ItemView(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer