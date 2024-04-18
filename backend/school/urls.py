from django.urls import path

from . import views
from .views import *

# См. https://docs.djangoproject.com/en/5.0/topics/http/urls/
urlpatterns = [
    path("account/register", StudentList.as_view(), name="account_register"),
    path("account/login", LoginView.as_view(), name="account_login"),
    path("account/reset-password", ResetPasswordView.as_view(), name="account_reset"),
    path("account/verify", VerifyStudentView.as_view(), name="account_verify"),
    path("account/profile", StudentList.as_view(), name="account_profile")

]
