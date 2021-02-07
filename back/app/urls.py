from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework import routers

from . import views
 
# router = routers.DefaultRouter()
# router.register('users', views.UserView, basename='users')
# router.register('items', views.ItemView, basename='items')

urlpatterns = [
    # path('', include(router.urls)),
    path('register/', views.registration_view, name="register"),
    path('login/', obtain_auth_token, name="login"),
    path('hello/', views.hello_world, name="hello"),

    path('users/', views.users, name="users"),
    path('users/<slug:pk>/', views.user_detail, name="user_detail"),

    path('items', views.items, name="items"),
]