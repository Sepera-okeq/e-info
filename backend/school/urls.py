from django.urls import path

from . import views
from .views import StudentList

# См. https://docs.djangoproject.com/en/5.0/topics/http/urls/
urlpatterns = [
    # path("", views.index, name="index"),
    # path("sonya", views.sonya, name="sonya"),
    path("account/register", StudentList.as_view(), name="account_register")
]
