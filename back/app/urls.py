from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('users', views.UserView)
router.register('items', views.ItemView)

urlpatterns = [
    path('', include(router.urls)),
    path('register/', views.registration_view, name="register"),
    path('login/', obtain_auth_token, name="login"),
]