from django.contrib.auth.models import AbstractUser
from django.db import models

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

class User(AbstractUser):
    phone = models.CharField(max_length=15)

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

class Item(models.Model):

    title = models.CharField(max_length=100)
    content = models.TextField(max_length=500)
    price = models.IntegerField()
    view = models.IntegerField()
    publish_date = models.DateTimeField()
    sell_username = models.ForeignKey(User, on_delete=models.CASCADE)
    state = models.CharField(max_length=25, default='sale')
    size = models.IntegerField()

    def __str__(self):
        return "[{0}] {1}".format(self.sell_username, self.title)
    

class WantedItem(models.Model):
    username = models.ManyToManyField(User)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)

    def __str__(self):
        return "{0} -> {1}".format(self.username, self.item)


class BuySell(models.Model):
    buy_username = models.CharField(max_length=8)
    sell_username = models.CharField(max_length=8)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)

    def __str__(self):
        return "{0}님이 {1}님의 {2}을(를) 구매했습니다.".format(self.buy_username, self.sell_username, self.item)


class BuyReservation(models.Model):
    buy_username = models.ForeignKey(User, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    accept = models.BooleanField(default=False)

    def __str__(self):
        return "[{0}] {1}님이 {2}상품에 구매신청을 하였습니다.".format(self.accept, self.buy_username, self.item)