from django.urls import path

from . import views

# См. https://docs.djangoproject.com/en/5.0/topics/http/urls/
urlpatterns = [
    path("", views.index, name="index"),
    path("sonya", views.sonya, name="sonya"),
    path("account/register", views.account_register, name="account_register")
]
