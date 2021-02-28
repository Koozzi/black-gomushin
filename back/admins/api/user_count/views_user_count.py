from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from admins.middleware import validation_token
from app import models

@api_view(['GET'])
def user_count(request):
    if request.method == 'GET':

        if "invalid_token" in validation_token(request).data:
            return Response(validation_token(request).data, status=status.HTTP_401_UNAUTHORIZED)

        user_count = models.User.objects.all().count()
        
        return Response({"user_count": user_count})

