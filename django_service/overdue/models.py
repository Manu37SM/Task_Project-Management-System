from django.db import models

# Create your models here.

class Task(models.Model):
    title = models.CharField(max_length=255)
    status = models.CharField(max_length=50)
    priority = models.CharField(max_length=50)
    due_date = models.DateField()
    project_id = models.IntegerField()
    assigned_to = models.IntegerField()

    class Meta:
        db_table = "tasks"
