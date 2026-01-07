from django.urls import path
from . import views
from .views import SignupView, LoginView,  dashboard_view

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('dashboard/', dashboard_view, name='dashboard'),
    path('user-profile/', views.get_user_profile, name='get_user_profile'),
    path('create-profile/', views.create_or_update_user_profile, name='create_user_profile'),

   
]

