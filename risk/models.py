from django.db import models

# Create your models here.

class Risk(models.Model):
    name = models.CharField(max_length=100, null=False)
    description = models.CharField(max_length=255, null=True)


class RiskField(models.Model):
    name = models.CharField(max_length=100, null=False)
    description = models.CharField(max_length=255, null=True)
    risk = models.ForeignKey(Risk, related_name='riskFields', on_delete=models.CASCADE)
    
    PRIMITIVE_TYPE = (
       ('1', 'text'),
       ('2', 'number'),
       ('3', 'date'),
       ('4', 'enum') 
    )

    fieldType = models.CharField(max_length=2, choices=PRIMITIVE_TYPE, default='1')

class EnumValue(models.Model):
    riskField = models.ForeignKey(RiskField, related_name='fieldsValues', on_delete=models.CASCADE)
    value = models.CharField(max_length=150, null=False)
