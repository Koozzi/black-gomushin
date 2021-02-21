from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token

from .views_item import views_item
from .views_user import views_user
from .views_search import views_search

urlpatterns = [
    path('register/', views_user.registration_view, name="register"),
    path('login/', obtain_auth_token, name="login"),
    path('users/', views_user.users, name="users"),
    path('users/<str:username>/', views_user.user_detail, name="user_detail"),

    path('items/', views_item.items, name="items"),
    path('items/<int:pk>/', views_item.item_detail, name="item_detail"),
    path('wishlist/<int:id>/', views_item.wanted_item, name="wish_list"),
    path('newitem/', views_item.new_item, name="new_item"),

    path('search/', views_search.item_search, name="item_search"),
]