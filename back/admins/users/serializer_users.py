import os, sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

from rest_framework import serializers
from app import models

class AllUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'