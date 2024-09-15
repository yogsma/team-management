from django.db import models

# Create your models here.
class TeamMember(models.Model):
    ROLE_CHOICES = [
        ('regular', 'Regular'),
        ('admin', 'Admin'),
    ]
    firstName = models.CharField(max_length=100, db_column='first_name')
    lastName = models.CharField(max_length=100, db_column='last_name')
    email = models.EmailField(max_length=100, unique=True)
    phone = models.CharField(max_length=20)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    
    def __str__(self):
        return self.first_name + " " + self.last_name