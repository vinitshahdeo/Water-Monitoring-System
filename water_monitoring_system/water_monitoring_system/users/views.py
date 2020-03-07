from django.contrib.auth import get_user_model
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse
from django.views.generic import DetailView, RedirectView, UpdateView
from django.contrib import messages
from django.utils.translation import ugettext_lazy as _

<<<<<<< HEAD
# imports for checking is the user has token key
from rest_framework.authtoken.models import Token 
from django.shortcuts import render


=======
>>>>>>> 82dff5934974a50c32a82d21f4b325f33d909197
User = get_user_model()


class UserDetailView(LoginRequiredMixin, DetailView):

    model = User
    slug_field = "username"
    slug_url_kwarg = "username"


user_detail_view = UserDetailView.as_view()


class UserUpdateView(LoginRequiredMixin, UpdateView):

    model = User
    fields = ["name"]

    def get_success_url(self):
        return reverse("users:detail", kwargs={"username": self.request.user.username})

    def get_object(self):
        return User.objects.get(username=self.request.user.username)

    def form_valid(self, form):
        messages.add_message(
            self.request, messages.INFO, _("Infos successfully updated")
        )
        return super().form_valid(form)


user_update_view = UserUpdateView.as_view()


class UserRedirectView(LoginRequiredMixin, RedirectView):

    permanent = False

    def get_redirect_url(self):
<<<<<<< HEAD
    # get the token associated with the user or else None and display error
        try:
            token = Token.objects.get(user=self.request.user)
        except Exception :
            token = None

        if token is None:
            return render(self.request,"users/invalid_token.html", context={"username": self.request.user.username})
        else:
            return reverse("users:detail", kwargs={"username": self.request.user.username})
=======
        return reverse("users:detail", kwargs={"username": self.request.user.username})
>>>>>>> 82dff5934974a50c32a82d21f4b325f33d909197


user_redirect_view = UserRedirectView.as_view()
