from django.shortcuts import render
from rest_framework import viewsets
from .models import TeamMember
from .serializers import TeamMemberSerializer

# Create your views here.
class TeamMemberViewSet(viewsets.ModelViewSet):    
    serializer_class = TeamMemberSerializer
    queryset = TeamMember.objects.all()
    filterset_fields = ['role']
    search_fields = ['first_name', 'last_name', 'email', 'phone', 'role']
    ordering_fields = ['first_name', 'last_name', 'email', 'phone', 'role']

