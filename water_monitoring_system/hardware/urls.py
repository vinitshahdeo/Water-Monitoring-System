from rest_framework import routers
from .api import HardwareViewSet

router = routers.DefaultRouter()
router.register('api/hardware', HardwareViewSet, 'hardware')

urlpatterns = router.urls