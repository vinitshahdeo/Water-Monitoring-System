from django.urls import path

from water_monitoring_system.hardware.api.views import (
    HardwareListApiView,
    HardwareDetailApiView,
)

urlpatterns = [
    path("hardwares/", view=HardwareListApiView.as_view()),
    path("hardwares/<int:pk>/", view=HardwareDetailApiView.as_view()),
]
