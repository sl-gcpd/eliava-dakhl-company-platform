from django.core.paginator import Paginator
from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Product
from . import serializers

class ProductView(APIView):
    def get(self,request,pk=None):
        if pk:
            try:
                data = Product.objects.get(id=pk)
                serializer = serializers.ProductSerializer(data, context={"request": request}, many=False)
                return Response(serializer.data)

            except:
                return Response("product was not found")

        data = Product.objects.all().order_by('-id')
        if "page" in request.GET:
            page = request.GET['page']
            paginator = Paginator(data, 25)
            page_obj = paginator.get_page(page)
            serializer = serializers.ProductSerializer(page_obj, context={"request": request}, many=True)
            return Response(serializer.data)
        else:
            serializer = serializers.ProductSerializer(data,context={"request":request},many=True)
            return Response(serializer.data)
