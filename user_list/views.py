from rest_framework import viewsets
from user_list.models import Users
from user_list.serializers import UsersSerializer

class ViewUsers(viewsets.ModelViewSet):
    queryset = Users.objects.all()  # обозначили, откуда берем данные

    serializer_class = UsersSerializer
