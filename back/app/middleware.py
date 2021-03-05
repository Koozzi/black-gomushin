from rest_framework.authtoken.models import Token
from rest_framework.response import Response

def validation_token(request):
    if request.method == 'GET' or request.method == 'POST':

        if 'HTTP_AUTHORIZATION' not in request.META:
            return Response({ "invalid_token": "Invalid Token" })
        
        print("In middleware")
        request_header = request.META['HTTP_AUTHORIZATION']
        print(request_header)
        _type, user_token = request_header.split()
        
        try:
            user = Token.objects.get(key=user_token)
            user = user.user

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