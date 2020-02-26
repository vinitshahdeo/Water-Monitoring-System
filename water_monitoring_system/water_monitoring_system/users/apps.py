from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class UsersConfig(AppConfig):
    name = "water_monitoring_system.users"
    verbose_name = _("Users")

    def ready(self):
        try:
            import water_monitoring_system.users.signals  # noqa F401
        except ImportError:
            pass
