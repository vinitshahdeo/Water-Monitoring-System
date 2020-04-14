from rest_framework import serializers
from water_monitoring_system.hardware.models import Hardware


class HardwareSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Hardware
        fields = ['hardware_id', 'water_level', 'latitude', 'longitude', 'user_id']
