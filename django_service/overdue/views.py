from django.shortcuts import render
from django.http import JsonResponse
from datetime import date
from .models import Task

def check_overdue(request):

    tasks = Task.objects.all()
    updated = 0

    for task in tasks:
        if task.due_date < date.today() and task.status != "DONE":
            if task.status != "OVERDUE":
                task.status = "OVERDUE"
                task.save()
                updated += 1

    return JsonResponse({
        "message": "checked",
        "updated": updated
    })
