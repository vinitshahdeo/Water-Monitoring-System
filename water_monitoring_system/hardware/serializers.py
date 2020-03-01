from rest_framework import serializers
from hardware.models import Hardware

class HardwareSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hardware
        field = '__all__'