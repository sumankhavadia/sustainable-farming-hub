# tips/models.py
from django.db import models

class FarmingTip(models.Model):
    tip = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.tip[:50]  # Short preview

