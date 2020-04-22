from rest_framework import generics

from .serializers import HardwareSerializer
from ..models import Hardware

class HardwareListApiView(generics.ListAPIView):
    '''
        Returns list of hardware devices
    '''

    queryset = Hardware.objects.all()
    serializer_class = HardwareSerializer

class HardwareDetailApiView(generics.RetrieveUpdateAPIView):
    '''
        Retrieve details of specified hardware device
        Update details of specified hardware device
    '''

    queryset = Hardware.objects.all()
    serializer_class = HardwareSerializer
    