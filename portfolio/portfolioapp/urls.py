from django.urls import path
from . import views
app_name='portfolioapp'
urlpatterns = [
    path('',views.general, name='general'),
    path('envoi/',views.envoi, name='envoi')

]