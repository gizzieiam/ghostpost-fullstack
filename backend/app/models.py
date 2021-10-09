from django.db import models
from django.utils import timezone


class Post(models.Model):
    header = models.CharField(max_length=30)
    text = models.TextField()
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)
    create_time = models.DateTimeField(default=timezone.now)
    roast = models.BooleanField(default=True)

    @property
    def voteCount(self):
        return self.likes - self.dislikes
    
    def __str__(self):
        return self.header
