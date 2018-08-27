from django.shortcuts import render
from rest_framework import status , generics , mixins
from .models import Risk
from .serializers import RiskSerializer

# Create your views here.

class risk_list(mixins.ListModelMixin,mixins.CreateModelMixin,generics.GenericAPIView):

    queryset = Risk.objects.all()
    serializer_class = RiskSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class risk_details(mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    
    queryset = Risk.objects.all()
    serializer_class = RiskSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs) 