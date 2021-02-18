from django.db.models import Q

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from ..serializers import *
from ..models import *
from ..middleware import validation_token

import time
import random

@api_view(['GET'])
def item_search(request):
    start = time.time()

    if request.method == 'GET':

        if "invalid_token" in validation_token(request).data:
            return Response(validation_token(request).data, status=status.HTTP_401_UNAUTHORIZED)

        try:
            keyword = request.query_params.get('keyword', None)

            '''
            __icontain -> 대소문자 알아서 비교
            JorDan으로 검색을 해도, Jordan, JORDAN, jordan 등을 모두 검색할 수 있다.
            '''
            items = Item.objects.filter(
                Q(title__icontains=keyword) |
                Q(content__icontains=keyword)
            )          

            print(str(items.query))

            # 검색어에 해당하는 데이터가 없는 경우  
            if not items[0]:
                return Response({"Error message":"No Item for your request"}, status=status.HTTP_404_NOT_FOUND)

        except:
            return Response({"Error message":"No Item for your request"}, status=status.HTTP_404_NOT_FOUND)
        
        try:
            offset = int(request.query_params.get('offset'))
            limit = int(request.query_params.get('limit'))
            items = items[offset:limit+offset]
            serializer = ItemSerializer(items, many=True)

        except:
            return Response({"Error message":"Wrong offset or limit"}, status=status.HTTP_404_NOT_FOUND)

        # limit값은 최대 20~30일 것 -> 성능에 크게 문제 없음
        for data in serializer.data:
            username = User.objects.get(id=data['sell_username']).username
            data['sell_user_id'] = data['sell_username']
            data['sell_username'] = username

        print("time :", time.time() - start)
        return Response(serializer.data, status=status.HTTP_200_OK)