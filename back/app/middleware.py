from rest_framework.authtoken.models import Token
from rest_framework.response import Response

def validation_token(request):
    if request.method == 'GET':
        request_header = request.META['HTTP_AUTHORIZATION']

        if not request_header:
            return Response({ "invalid_token": "Invalid Token" })

        _type, user_token = request_header.split()
        print("Request Token : ", user_token)
        
        try:
            user = Token.objects.get(key=user_token)
            user = user.user
            print("user's id : ", user.id)

            result = {
                "type": _type,
                "token": user_token,
                "user_id": user.id
            }
            
        except:
            result = {
                "invalid_token": "Invalid Token"
            }

        return Response(result)