from django.contrib import admin
from .models import Polls, Events


@admin.register(Polls)
class Admin(admin.ModelAdmin):
    list_display = ('author', 'title')
    # search_fields = ('',,)
    # list_filter = ('')


admin.site.register(Events)

