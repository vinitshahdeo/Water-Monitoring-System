from django.db import models
from water_monitoring_system.users.models import User
from django.core.validators import MaxValueValidator, MinValueValidator


class Hardware(models.Model):
    """
    This is database schema for the hardware devices
    """
    hardware_id = models.IntegerField()
    water_level = models.FloatField(
        default=0.0,
        validators=[
            MinValueValidator(0.0),
            MaxValueValidator(100)
        ]
    )
    latitude = models.IntegerField(blank=True, null=True)
    longitude = models.IntegerField(blank=True, null=True)
    user_id = models.ForeignKey(User, related_name="hardware", on_delete=models.CASCADE)

    def __str__(self):
        return str(self.hardware_id)
