from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token

from .api.item.item_detail.views_item_detail import item_detail
from .api.item.new_item.views_new_item import new_item
from .api.item.search.views_search import search

from .api.user.register.views_register import registration
from .api.user.profile.views_profile import profile
from .api.user.user_detail.views_user_detail import user_detail


urlpatterns = [
    path('register/', registration, name="register"),
    path('login/', obtain_auth_token, name="login"),
    
    path('profile/', profile, name="profile"),
    path('user/', user_detail, name="user_detail"),

    path('item/<int:pk>/', item_detail, name="item_detail"),
    path('search/', search, name="search"),
    
    path('newitem/', new_item, name="new_item"),
]