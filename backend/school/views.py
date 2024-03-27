from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import StudentSerializer

class StudentList(APIView):
    def post(self, request):
        data = StudentSerializer(data=request.data)
        if data.is_valid():
            data.save()
            return Response(data.data, status=status.HTTP_200_OK)
        return Response(data.errors, status=status.HTTP_400_BAD_REQUEST)


# def index(request):
#     return HttpResponse("Hello, world. You're at the polls index.")
#
#
# def sonya(request):
#     return HttpResponse("Соняяяяяя")
