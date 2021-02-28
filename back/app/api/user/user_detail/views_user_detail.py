from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from app.models import User
from app.middleware import validation_token
from .serializer_user_detail import UserSerializer

@api_view(['GET'])
def user_detail(request):
    if request.method == 'GET':

        if "invalid_token" in validation_token(request).data:
            return Response(validation_token(request).data, status=status.HTTP_401_UNAUTHORIZED)

        user_id = request.query_params.get('id')
        user = User.objects.get(id=user_id)
        serializer = UserSerializer(user)

        return Response(serializer.data)