# Generated by Django 3.0.3 on 2020-02-06 19:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_list', '0015_auto_20200206_1956'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='photo',
            field=models.ImageField(upload_to='images/'),
        ),
    ]