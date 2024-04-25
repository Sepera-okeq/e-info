from django.contrib.auth import login, authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .serializers import *
from .models import *
from datetime import timedelta, datetime
from django.utils import timezone


class RegisterView(APIView):
    def post(self, request):
        data = StudentSerializer(data=request.data)
        if data.is_valid():
            data.save()
            return Response({"message": "Успешная регистрация"}, status=status.HTTP_200_OK)
        return Response({"message": "Неверные данные"}, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request):
        data = LoginSerializer(data=request.data)
        if data.is_valid():
            email = data.validated_data['email']
            password = data.validated_data['password']
            try:
                student = Student.objects.get(email=email)
                if check_password(password, student.password):
                    login(request, student)
                    token = Token.objects.create(student=student)
                    return Response({"message": "Успешный вход"}, status=status.HTTP_200_OK)
                else:
                    return Response({"error": "Неверные данные"}, status=status.HTTP_400_BAD_REQUEST)
            except Student.DoesNotExist:
                return Response({"error": "Неверные данные"}, status=status.HTTP_400_BAD_REQUEST)
        return Response(data.errors, status=status.HTTP_400_BAD_REQUEST)



class ResetPasswordView(APIView):
    def post(self, request):
        data = ResetPasswordSerializer(data=request.data)
        if data.is_valid():
            email = data.validated_data['email']
            # дальше не придумала


class VerifyStudentView(APIView):
    def post(self, request):
        serializer = VerifyStudentSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            verification_code = serializer.validated_data['verification_code']
            # как-то проверяем код

class ProfileView(APIView):
    permission_classes = [IsAuthenticated] #хочим чтобы пользователь был аутенфицирован
    def get(self, request):
        student = request.user
        serializer = StudentSerializer(student)
        return Response(serializer.data, status=status.HTTP_200_OK)
