from rest_framework import serializers
from hardware.models import Hardware

class HardwareSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hardware
        fields = '__all__'