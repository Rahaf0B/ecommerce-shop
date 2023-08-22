# Generated by Django 4.2.4 on 2023-08-17 19:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Products', '0004_product_added_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='product_color',
        ),
        migrations.AddField(
            model_name='accessories',
            name='product_color',
            field=models.ManyToManyField(to='Products.color'),
        ),
    ]
