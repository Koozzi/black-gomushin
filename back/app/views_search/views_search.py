from django.db.models import Q

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from ..middleware import validation_token
from ..serializers import *
from ..models import *

import random
import time

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
            items = Item.objects.select_related('sell_username')

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
            
            if keyword:
                # items = items.filter(
                #     Q(title__icontains=keyword) |
                #     Q(content__icontains=keyword)
                # )
                item_title = items.filter(title__icontains=keyword)
                item_content = items.filter(content__icontains=keyword)
                items = item_title | item_content
            
            # 검색어에 해당하는 데이터가 없는 경우
            # https://medium.com/@bdv111/django%EC%97%90%EC%84%9C-exists-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-b3af4d387930
            if not items.exists():
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


        print("time :", time.time() - start)
        return Response(serializer.data, status=status.HTTP_200_OK)