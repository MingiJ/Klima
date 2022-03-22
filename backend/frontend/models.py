from django.db import models
from accounts.models import UserAccount


class Polls(models.Model):
    author = models.ForeignKey(UserAccount, on_delete= models.CASCADE)
    title  = models.CharField(max_length=500)
    description = models.TextField()
    image  = models.ImageField(upload_to = 'build/static/')
    date_posted = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.author.name} - {self.title}"


    class Meta:
        verbose_name = "Polls"
        verbose_name_plural = "Polls"


class Events(models.Model):
    host = models.ForeignKey(UserAccount, on_delete= models.CASCADE)
    link = models.CharField(max_length = 200)
    image = models.ImageField(upload_to = 'build/images')
    description = models.TextField()
    date_of_the_event = models.DateTIimeField()


    def __str__(self):
        return f"{ self.host.username } - { self.date_of_the_event }"


    class Meta:
        verbose_name = "Events"
        verbose_name_plural = "Events"
