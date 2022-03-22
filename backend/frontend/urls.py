from django.urls import path
from . import views 



urlpatterns = [
    path('', views.index, name="home"),
    path('endpoints/',views.endpoints,name="endpoints"),
    path('polls/', views.polls_get_post,name="polls_get_post"),
    path('polls/<int:pk>/', views.poll_get_put_delete, name='poll_get_put_delete')
    
]