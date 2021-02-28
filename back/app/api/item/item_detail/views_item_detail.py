from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from app.models import Item, User
from app.middleware import validation_token
from .serializer_item_detail import  ItemSerializer

@api_view(['GET'])
def item_detail(request, pk):
    if request.method == 'GET':

        if "invalid_token" in validation_token(request).data:
            return Response(validation_token(request).data, status=status.HTTP_401_UNAUTHORIZED)

        try:
            item = Item.objects.get(id=pk)
            item.view += 1
            item.save()
        
        except: 
            return Response({"Error message" : "No Item number {0}".format(pk)}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = ItemSerializer(item)
        item_detail = serializer.data
        # serializer.data is a property of the class and therefore immutable
        # 새로운 dictionary에 복사해서 데이터를 처리한다.

        username = User.objects.get(id=serializer.data['sell_username']).username
        user_id = serializer.data['sell_username']

        item_detail['sell_username'] = username
        item_detail['sell_user_id'] = user_id

        return Response(item_detail, status=status.HTTP_200_OK)