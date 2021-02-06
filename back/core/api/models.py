from django.db import models

class User(models.Model):
    username = models.CharField(max_length=8, primary_key=True)
    password = models.CharField(max_length=1000)
    phone = models.CharField(max_length=12)
    
    join_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username


class Item(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(max_length=500)
    price = models.IntegerField()
    view = models.IntegerField()
    publish_date = models.DateTimeField()
    sell_username = models.ForeignKey(User, on_delete=models.CASCADE)
    state = models.CharField(max_length=25, default='selling')
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