import json

from django.shortcuts import render

from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


def sonya(request):
    return HttpResponse("Соняяяяяя")

@csrf_exempt 
def account_register(request):
    if request.method != "POST":
        return HttpResponse("404 Ты дурак")

    student = json.loads(request.body)
    # тут регистрируем

    return JsonResponse(student)