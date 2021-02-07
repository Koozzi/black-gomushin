from django.contrib import admin
from .models import *

admin.site.register(User)
admin.site.register(Item)
admin.site.register(WantedItem)
admin.site.register(BuySell)
admin.site.register(BuyReservation)