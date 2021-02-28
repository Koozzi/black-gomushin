from django.contrib.auth.models import AbstractUser
from django.utils import timezone
from django.db import models

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

from .django_fulltext_search import SearchManager

class User(AbstractUser):
    phone = models.CharField(max_length=15)


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class Item(models.Model):

    objects = SearchManager(['title', 'content'])    

    title = models.CharField(max_length=100)
    content = models.CharField(max_length=500)
    price = models.IntegerField()
    view = models.IntegerField(default=0)
    publish_date = models.DateTimeField(auto_now=True)
    sell_username = models.ForeignKey(User, on_delete=models.CASCADE)
    state = models.CharField(max_length=25, default='sale')
    size = models.IntegerField()
    imageurl = models.TextField(max_length=500, default='https://gomushin.s3.ap-northeast-2.amazonaws.com/jordan/p_11cedf5899e0415e9cd88df144cae4ee.png')

    def __str__(self):
        return "[{0}] {1}".format(self.sell_username, self.title)

class Search(models.Lookup):
    lookup_name = 'search'

    def as_mysql(self, compiler, connection):
        lhs, lhs_params = self.process_lhs(compiler, connection)
        rhs, rhs_params = self.process_rhs(compiler, connection)
        params = lhs_params + rhs_params

        return 'MATCH (%s) AGAINST (%s IN BOOLEAN MODE)' % (lhs, rhs), params

models.CharField.register_lookup(Search)
models.TextField.register_lookup(Search)

class Test(models.Model):
    title = models.CharField(max_length=100)
    content = models.CharField(max_length=100)

class FulltextTest(models.Model):

    objects = SearchManager(['title', 'content'])

    title = models.CharField(max_length=100)
    content = models.CharField(max_length=100)