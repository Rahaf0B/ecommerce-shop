# Generated by Django 4.2.4 on 2023-08-17 20:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Products', '0005_remove_product_product_color_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.FloatField(blank=True, null=True, verbose_name='price'),
        ),
    ]
