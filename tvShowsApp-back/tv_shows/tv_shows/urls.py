from django.urls import path
from series_movies.views import get_data

urlpatterns = [
    path('api/get_data/', get_data),
]
