# Generated by Django 4.2.4 on 2023-08-12 22:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Products', '0002_color_remove_product_color_product_product_color'),
    ]

    operations = [
        migrations.AlterField(
            model_name='color',
            name='color_name',
            field=models.CharField(blank=True, max_length=70, null=True, verbose_name='color_name'),
        ),
        migrations.RemoveField(
            model_name='product',
            name='product_color',
        ),
        migrations.CreateModel(
            name='Perfume',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Products.product')),
            ],
        ),
        migrations.CreateModel(
            name='Accessories',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Products.product')),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='product_color',
            field=models.ManyToManyField(to='Products.color'),
        ),
    ]
