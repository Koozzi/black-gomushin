from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from ..middleware import validation_token
from ..serializers import *
from ..models import *

import time
import random

@api_view(['POST'])
def new_item(request):
    if request.method == 'POST':
        
        Test.objects.all().delete()

        title_list = [
            'Mid White Shadow',
            'Jordan 1 youRetro High OG CO.JP Midnight Navy',
            'Retro High Rookie of the Year',
            'Jordan 1 Retro Highyou Clay Green',
            'Nike x sacai Blazer Mid Black Grey',
            'Please',
            'Shape of you',
            'ipad',
            'django',
            'jenkins'
        ]
        content_list = [
            'This is a series of tutorials for Jenkins',
            'This is a Part I Getting Started with Jenkins.',
            'We are talking of Devops build and release mechanism.',
            'You know the code starts right away from the devel ',
            'A Version Control System(VCS) keep individual’s ',
            'So, your written code rea Jordan ch the centralized ',
            'Git is widely usedyou version control system in most of the projects.',
            'Once your codebase is ready it Jordan can go through ',
            'And, iyoun between lot of configuration task need to ',
            'The youmost of the t Jordan ask needs automation in',
            'This is a series of tutorials for Jenkins',
            'This is a Part I Getting Started with Jenkins.',
            'We are talking of Devops build and release mechanism.',
            'This is a series of tutorials for Jenkins',
            'This is a Part I Getting Started with Jenkins.',
            'We are talking of Devops build and release mechanism.',
            'This is a series of tutorials for Jenkins',
            'This is a Part I Getting Started with Jenkins.',
            'We are talking of Devops build and release mechanism.',
            'This is a series of tutorials for Jenkins',
            'This is a Part I Getting Started with Jenkins.',
            'We are talking of Devops build and release mechanism.',
            'This is a series of tutorials for Jenkins',
            'This is a Part I Getting Started with Jenkins.',
            'We are talking of Devops build and release mechanism.',
        ]

        for _ in range(100000):

            title_idx = random.randrange(0,10)
            content_idx = random.randrange(0,25)

            Test.objects.create(
                title=title_list[title_idx],
                content = content_list[content_idx],
            )

        return Response({"message":"good"})


@api_view(['POST'])
def fulltext_new_item(request):
    if request.method == 'POST':
        
        FulltextTest.objects.all().delete()

        title_list = [
            'Mid White Shadow',
            'Jordan 1 youRetro High OG CO.JP Midnight Navy',
            'Retro High Rookie of the Year',
            'Jordan 1 Retro Highyou Clay Green',
            'Nike x sacai Blazer Mid Black Grey',
            'Please',
            'Shape of you',
            'ipad',
            'django',
            'jenkins'
        ]
        content_list = [
            'This is a series of tutorials for Jenkins',
            'This is a Part I Getting Started with Jenkins.',
            'We are talking of Devops build and release mechanism.',
            'You know the code starts right away from the devel ',
            'A Version Control System(VCS) keep individual’s ',
            'So, your written code rea Jordan ch the centralized ',
            'Git is widely usedyou version control system in most of the projects.',
            'Once your codebase is ready it Jordan can go through ',
            'And, iyoun between lot of configuration task need to ',
            'The youmost of the t Jordan ask needs automation in',
            'This is a series of tutorials for Jenkins',
            'This is a Part I Getting Started with Jenkins.',
            'We are talking of Devops build and release mechanism.',
            'This is a series of tutorials for Jenkins',
            'This is a Part I Getting Started with Jenkins.',
            'We are talking of Devops build and release mechanism.',
            'This is a series of tutorials for Jenkins',
            'This is a Part I Getting Started with Jenkins.',
            'We are talking of Devops build and release mechanism.',
            'This is a series of tutorials for Jenkins',
            'This is a Part I Getting Started with Jenkins.',
            'We are talking of Devops build and release mechanism.',
            'This is a series of tutorials for Jenkins',
            'This is a Part I Getting Started with Jenkins.',
            'We are talking of Devops build and release mechanism.',
        ]

        for _ in range(1000):

            title_idx = random.randrange(0,10)
            content_idx = random.randrange(0,25)

            FulltextTest.objects.create(
                title=title_list[title_idx],
                content = content_list[content_idx],
            )

        return Response({"message":"good"})


@api_view(['GET'])
def fulltext_search(request):
    if request.method == 'GET':
        test_all = FulltextTest.objects.all()
        test = FulltextTest.objects.search('you*')
        result = test_all & test

        return Response({"message":"good"})

