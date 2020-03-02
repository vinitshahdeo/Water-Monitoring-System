from rest_framework import serializers
from water_monitoring_system.hardware.models import Hardware


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Hardware
