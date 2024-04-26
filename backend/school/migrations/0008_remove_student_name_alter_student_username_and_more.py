# Generated by Django 5.0.2 on 2024-04-26 06:42

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('school', '0007_alter_student_email_alter_token_expires_at'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='student',
            name='name',
        ),
        migrations.AlterField(
            model_name='student',
            name='username',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='token',
            name='expires_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 5, 10, 6, 42, 41, 585637, tzinfo=datetime.timezone.utc)),
        ),
    ]