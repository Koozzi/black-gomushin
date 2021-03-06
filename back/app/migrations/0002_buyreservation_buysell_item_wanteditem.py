# Generated by Django 3.1.6 on 2021-02-06 16:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('content', models.TextField(max_length=500)),
                ('price', models.IntegerField()),
                ('view', models.IntegerField()),
                ('publish_date', models.DateTimeField()),
                ('state', models.CharField(default='selling', max_length=25)),
                ('size', models.IntegerField()),
                ('sell_username', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.user')),
            ],
        ),
        migrations.CreateModel(
            name='WantedItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.item')),
                ('username', models.ManyToManyField(to='app.User')),
            ],
        ),
        migrations.CreateModel(
            name='BuySell',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('buy_username', models.CharField(max_length=8)),
                ('sell_username', models.CharField(max_length=8)),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.item')),
            ],
        ),
        migrations.CreateModel(
            name='BuyReservation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('accept', models.BooleanField(default=False)),
                ('buy_username', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.user')),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.item')),
            ],
        ),
    ]
