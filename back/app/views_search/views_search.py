from django.db.models import Q

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from ..middleware import validation_token
from ..serializers import *
from ..models import *

import time
import random

@api_view(['GET'])
def item_search(request):
    start = time.time()

    if request.method == 'GET':

        if "invalid_token" in validation_token(request).data:
            return Response(validation_token(request).data, status=status.HTTP_401_UNAUTHORIZED)

        try:
            keyword = request.query_params.get('keyword')
            minprice = request.query_params.get('minprice')
            maxprice = request.query_params.get('maxprice')
            size = request.query_params.get('size')
            state = request.query_params.get('state')
            items = Item.objects.all()

            if minprice and maxprice:
                minprice, maxprice = int(minprice), int(maxprice)
                if minprice > maxprice:
                    return Response({"Error message" : "'minprice' value is larger than 'maxprice' value."}, status=status.HTTP_400_BAD_REQUEST)

                if minprice < 0 or maxprice < 0:
                    return Response({"Error message" : "minprice and maxprice can have value less than 0."}, status=status.HTTP_400_BAD_REQUEST)
                
                items = items.filter(price__lte=maxprice, price__gte=minprice)

            if size:
                size = int(size)
                if size < 210 or size > 300:
                    return Response({"Error message": "'size' must larger than 210 and less than 300."}, status=status.HTTP_400_BAD_REQUEST)

                if size % 5 != 0:
                    return Response({"Error message": "'size' must be divided by 5."}, status=status.HTTP_400_BAD_REQUEST)

                items = items.filter(size=size)
            
            if state:
                if state != 'sale' and state != 'progress' and state != 'sold':
                    return Response({"Error message":"'state' value must be 'sale' or 'progress' or 'sold'."}, status=status.HTTP_400_BAD_REQUEST)
                
                items = items.filter(state=state)

            '''
            __icontain -> 대소문자 알아서 비교
            JorDan으로 검색을 해도, Jordan, JORDAN, jordan 등을 모두 검색할 수 있다.
            '''
            items = items.filter(
                Q(title__icontains=keyword) |
                Q(content__icontains=keyword)
            )
            
            cnt = items.count()
            print(items)
            # 검색어에 해당하는 데이터가 없는 경우  
            if cnt == 0:
                return Response({"Error message":"No Item for your request"}, status=status.HTTP_404_NOT_FOUND)

        except:
            return Response({"Error message":"Invalid query parameter"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            offset = int(request.query_params.get('offset'))
            limit = int(request.query_params.get('limit'))
            items = items[offset:limit+offset]
            serializer = ItemSerializer(items, many=True)

        except:
            return Response({"Error message":"Wrong offset or limit"}, status=status.HTTP_400_BAD_REQUEST)

        # limit값은 최대 20~30일 것 -> 성능에 크게 문제 없음
        for data in serializer.data:
            username = User.objects.get(id=data['sell_username']).username
            data['sell_user_id'] = data['sell_username']
            data['sell_username'] = username

        print("time :", time.time() - start)
        return Response(serializer.data, status=status.HTTP_200_OK)