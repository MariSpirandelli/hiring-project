# Generated by Django 2.1 on 2018-08-19 18:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('risk', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='riskfield',
            name='fieldType',
            field=models.CharField(choices=[('1', 'text'), ('2', 'number'), ('3', 'date'), ('4', 'enum')], default='1', max_length=2),
        ),
        migrations.DeleteModel(
            name='FieldType',
        ),
    ]
