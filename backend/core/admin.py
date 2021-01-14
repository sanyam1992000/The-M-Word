from django.contrib import admin
from core import models
# Register your models here.

admin.site.site_header = 'Manan - A TechnoSurge'

admin.site.register(models.User)