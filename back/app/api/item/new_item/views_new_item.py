from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from app.models import Item, User
from app.middleware import validation_token

import random

# 배포용은 아니다. 나중에 수정을 해야한다.
# 현재 로컬에서 아이템을 쉽게 추가하기 위해서 만든 함수이다.
@api_view(['POST'])
def new_item(request):
    if request.method == 'POST':
        
        if "invalid_token" in validation_token(request).data:
            return Response(validation_token(request).data)
        
        # Item.objects.all().delete()

        title_list = [
            'Mid White Shadow',
            'Jordan 1 Retro High OG CO.JP Midnight Navy',
            'Retro High Rookie of the Year',
            'Jordan 1 Retro High Clay Green',
            'Nike x sacai Blazer Mid Black Grey',
            'Please',
            'Shape of you',
            'ipad',
            'django',
            'jenkins'
        ]
        url_list = [
            'https://gomushin.s3.ap-northeast-2.amazonaws.com/jordan/Jordan+1+Mid+White+Shadow.png',
            'https://gomushin.s3.ap-northeast-2.amazonaws.com/jordan/Jordan+1+Retro+High+OG+CO.JP+Midnight+Navy.png',
            'https://gomushin.s3.ap-northeast-2.amazonaws.com/jordan/Jordan+1+Retro+High+Rookie+of+the+Year.png',
            'https://gomushin.s3.ap-northeast-2.amazonaws.com/jordan/Jordan+1+Retro+High+Clay+Green.png',
            'https://gomushin.s3.ap-northeast-2.amazonaws.com/jordan/Nike+x+sacai+Blazer+Mid+Black+Grey.png',
            'https://gomushin.s3.ap-northeast-2.amazonaws.com/jordan/Jordan+1+Mid+White+Shadow.png',
            'https://gomushin.s3.ap-northeast-2.amazonaws.com/jordan/Jordan+1+Retro+High+OG+CO.JP+Midnight+Navy.png',
            'https://gomushin.s3.ap-northeast-2.amazonaws.com/jordan/Jordan+1+Retro+High+Rookie+of+the+Year.png',
            'https://gomushin.s3.ap-northeast-2.amazonaws.com/jordan/Jordan+1+Retro+High+Clay+Green.png',
            'https://gomushin.s3.ap-northeast-2.amazonaws.com/jordan/Nike+x+sacai+Blazer+Mid+Black+Grey.png',
        ]
        content_list = [
            'This is a series of tutorials for Jenkins',
            'This is a Part I Getting Started with Jenkins.',
            'We are talking of Devops build and release mechanism.',
            'You know the code starts right away from the devel ',
            'A Version Control System(VCS) keep individual’s ',
            'So, your written code rea Jordan ch the centralized ',
            'Git is widely used version control system in most of the projects.',
            'Once your codebase is ready it Jordan can go through ',
            'And, in between lot of configuration task need to ',
            ' The most of the t Jordan ask needs automation in'
        ]

        size_list = [235, 240, 245, 250, 255, 260, 265, 270, 275, 280]

        for _ in range(900000):
            title_url_idx = random.randrange(0,10)
            else_idx = random.randrange(0,10)
            
            user = User.objects.get(id=1)

            Item.objects.create(
                title=title_list[title_url_idx],
                imageurl=url_list[title_url_idx],
                content = content_list[else_idx],
                price = random.randrange(1,5555),
                sell_username = user,
                size = size_list[else_idx]
            )

        return Response({"message":"good"})

