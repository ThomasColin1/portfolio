# Generated by Django 3.2.9 on 2021-11-15 20:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioapp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='commentaire',
            old_name='commentaire_title',
            new_name='mail',
        ),
    ]
