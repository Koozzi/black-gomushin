# Generated by Django 3.1.6 on 2021-02-14 15:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_auto_20210214_1501'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='image_url',
            new_name='imageurl',
        ),
    ]
