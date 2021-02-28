from rest_framework import serializers
from app import models

class AllUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = '__all__'