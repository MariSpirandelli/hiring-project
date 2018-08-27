"""hiringProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path, include
from django.contrib.staticfiles.views import serve
from django.views.generic import RedirectView
from risk import views

urlpatterns = [
    path('', serve, kwargs={'path': 'frontend/index.html'}),
    re_path(r'^(?!/?static/)(?!/?media/)(?P<path>.*\..*)$', RedirectView.as_view(url='/static/frontend/%(path)s', permanent=False)),
    path('auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('risks/', views.risk_list.as_view()),
    path('risks/<int:pk>', views.risk_details.as_view())

]
