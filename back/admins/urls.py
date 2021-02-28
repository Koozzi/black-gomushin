from django.urls import path

from .users import views_users

urlpatterns = [
    path('/users/', views_users.users, name="users"),
]