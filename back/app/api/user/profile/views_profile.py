from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework import status

from app.models import User
from app.middleware import validation_token
from .serializer_profile import UserSerializer

import time
import random

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