from . import views
from django.urls import path


urlpatterns = [
    path('product',views.ProductView.as_view(),name="productList"),
    path('product/search',views.SearchProductView.as_view(),name="productSearch"),
    path('product/<int:pk>',views.ProductView.as_view(),name="productDetails")
]