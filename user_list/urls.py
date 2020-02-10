from django.urls import path, include
from rest_framework.routers import DefaultRouter
from user_list.views import ViewUsers


router = DefaultRouter()  # создали объект класса
router.register('users', ViewUsers)  # вызвали у него метод, который записывает путь

urlpatterns = [
    path('', include(router.urls)),
]