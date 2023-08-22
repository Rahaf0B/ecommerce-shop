# Generated by Django 4.2.4 on 2023-08-12 22:21

import django.contrib.auth.validators
from django.db import migrations, models
import django.utils.timezone
import users.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Allergies',
            fields=[
                ('allergies_id', models.AutoField(primary_key=True, serialize=False)),
                ('allergies_name', models.CharField(blank=True, max_length=150, null=True, verbose_name='allergies_name')),
            ],
        ),
        migrations.CreateModel(
            name='Diseases',
            fields=[
                ('diseases_id', models.AutoField(primary_key=True, serialize=False)),
                ('diseases_name', models.CharField(blank=True, max_length=150, null=True, verbose_name='diseases_name')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=150, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('is_reqUser', models.BooleanField(default=False)),
                ('is_Nutritionist', models.BooleanField(default=False)),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('is_online', models.BooleanField(default=True, verbose_name='is_online')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('email', models.EmailField(max_length=254, null=True, unique=True, verbose_name='email address')),
                ('verificationCode', models.CharField(max_length=10, verbose_name='verificationCode')),
                ('first_name', models.CharField(blank=True, max_length=150, null=True, verbose_name='first_name')),
                ('last_name', models.CharField(blank=True, max_length=150, null=True, verbose_name='last_name')),
                ('gender', models.CharField(blank=True, max_length=5, null=True, verbose_name='gender')),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(auto_now=True, null=True)),
                ('profile_pic', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('date_of_birth', models.DateField(blank=True, null=True, verbose_name='date_of_birth')),
                ('weight', models.FloatField(blank=True, null=True, verbose_name='weight')),
                ('height', models.FloatField(blank=True, null=True, verbose_name='height')),
                ('allergies', models.ManyToManyField(blank=True, null=True, related_name='Allergies', to='users.allergies')),
                ('diseases', models.ManyToManyField(blank=True, null=True, related_name='Disease', to='users.diseases')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('objects', users.models.MyUserManager()),
            ],
        ),
    ]
