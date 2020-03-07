from django.contrib.auth.models import AbstractUser
from django.db.models import CharField
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _

<<<<<<< HEAD
# added for creating tokens for users
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
=======
>>>>>>> 82dff5934974a50c32a82d21f4b325f33d909197

class User(AbstractUser):

    # First Name and Last Name do not cover name patterns
    # around the globe.
    name = CharField(_("Name of User"), blank=True, max_length=255)

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})
<<<<<<< HEAD

# this will create unique tokens for each user after registration
@receiver(post_save,sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False,**kwargs):
    if created:
        Token.objects.create(user=instance)
=======
>>>>>>> 82dff5934974a50c32a82d21f4b325f33d909197
