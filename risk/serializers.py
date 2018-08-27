from rest_framework import serializers
from .models import *

class EnumValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = EnumValue
        fields = '__all__'

class RiskFieldsSerializer(serializers.ModelSerializer):
    fieldsValues = EnumValueSerializer(many=True)

    class Meta:
        model = RiskField
        fields = ('id', 'name', 'description', 'risk', 'fieldType', 'fieldsValues')


class RiskSerializer(serializers.ModelSerializer):
    riskFields = RiskFieldsSerializer(many=True)

    class Meta:
        model = Risk
        fields = ('id', 'name', 'description', 'riskFields')