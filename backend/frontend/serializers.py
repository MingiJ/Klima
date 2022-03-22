from rest_framework import serializers
from .models import Polls, Events

class PollsSerializer(serializers.ModelSerializer):
    #  image = serializers.ImageField(max_length=None, use_url=True)

     class Meta:
         model = Polls
         fields = ('id','title', 'description','image','date_posted')

    
class EventsSerializer(serializers.ModelSerializer):
    class Meta :
        model = Events
        fields = "__all__"    
        
