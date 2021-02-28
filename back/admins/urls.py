from django.urls import path

from .api.users import views_users
from .api.user_count import views_user_count

from .api.item_count import views_item_count

urlpatterns = [
    path('users/', views_users.users, name="users"),
    path('user_count/', views_user_count.user_count, name="user_count"),

    path('item_count/', views_item_count.item_count, name="item_count"),
]