from hardware.models import Hardware
from rest_framework import viewsets, permissions
from .serializers import HardwareSerializer

class HardwareViewSet(viewsets.ModelViewSet):
    queryset = Hardware.objects.all()
    # permissions_classes = [
    #     permissions.AllowAny
    # ]

    serializer_class = HardwareSerializer

    def get_queryset(self):
        return self.request.user.Hardware.all()