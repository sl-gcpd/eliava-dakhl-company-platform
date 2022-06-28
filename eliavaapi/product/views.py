from django.core.paginator import Paginator
from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
import django_filters.rest_framework

from .models import Product
from . import serializers


class ProductView(APIView):
    def get(self, request, pk=None):
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
            serializer = serializers.ProductSerializer(data, context={"request": request}, many=True)
            return Response(serializer.data)


class SearchProductView(generics.ListAPIView):
    serializer_class = serializers.ProductSerializer
    queryset = Product.objects.all()
    def get_queryset(self):
        queryset = super().get_queryset()
        category = self.request.query_params.get("type")
        price_from = self.request.query_params.get("priceFrom")
        price_to = self.request.query_params.get("priceTo")
        kword = self.request.query_params.get("kword")
        queryset = list(queryset)
        if kword is not None:
            queryset = list(filter(lambda x: kword.lower() in x.name.lower(),queryset))
        if category is not None:
            categories = category.split('_')
            queryset = list(filter(lambda x: x.type in categories, queryset))
        if price_from is not None:
            try:
                price_from_decimal = float(price_from)
                queryset = list(filter(lambda x: x.price >= price_from_decimal, queryset))
            except:
                pass
        if price_to is not None:
            try:
                price_to_decimal = float(price_to)
                queryset = list(filter(lambda x: x.price <= price_to_decimal, queryset))
            except:
                pass
        return queryset
