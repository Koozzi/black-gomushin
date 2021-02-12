from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token

from . import views

urlpatterns = [
    path('register/', views.registration_view, name="register"),
    path('login/', obtain_auth_token, name="login"),
    path('hello/', views.hello_world, name="hello"),

    path('users/', views.users, name="users"),
    path('users/<str:username>/', views.user_detail, name="user_detail"),

    path('items/', views.items, name="items"),
    path('items/<int:pk>', views.item_detail, name="item_detail"),
    path('newitem/', views.new_item, name="new_item"),

    path('wishlist/<int:id>/', views.wanted_item, name="wish_list"),
]