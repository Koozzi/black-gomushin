from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token

from .views_item import views_item
from .views_user import views_user
from .views_search import views_search
from .views_test import views_test 

urlpatterns = [
    path('register/', views_user.registration_view, name="register"),
    path('login/', obtain_auth_token, name="login"),
    path('users/', views_user.users, name="users"),
    path('users/<str:username>/', views_user.user_detail, name="user_detail"),

    path('items/', views_item.items, name="items"),
    path('items/<int:pk>/', views_item.item_detail, name="item_detail"),
    path('newitem/', views_item.new_item, name="new_item"),

    path('search/', views_search.item_search, name="item_search"),

    path('test/', views_test.fulltext_new_item, name="test"),
    path('test_search/', views_test.fulltext_search, name="test_search"),
]