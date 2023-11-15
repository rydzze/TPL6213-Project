from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(response):
    return HttpResponse("<h1>Hosting my web using Django!</h1>")

def v1(response):
    return HttpResponse("<h1>View 1</h1>")