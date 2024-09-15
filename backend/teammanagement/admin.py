from django.contrib import admin
from .models import TeamMember
# Register your models here.
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ('firstName', 'lastName', 'email', 'phone', 'role')
    search_fields = ('firstName', 'lastName', 'email', 'phone', 'role')
    list_filter = ('role',)

admin.site.register(TeamMember, TeamMemberAdmin)