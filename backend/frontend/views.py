from django.shortcuts import render
from rest_framework.decorators import api_view
from .serializers import PollsSerializer
from rest_framework import status
from rest_framework.response import Response
from .models import Polls

def index(request):
    return render(request, 'frontend/index.html')


def endpoints(request):
    return render(request, 'frontend/endpoints.html')

@api_view(['GET', 'POST'])
def polls_get_post(request, format=None):
    if request.method == "POST":
        serializer = PollsSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    elif request.method == "GET":
        polls = Polls.objects.all()
        serializer = PollsSerializer(polls, many = True)
        return Response(serializer.data, status = status.HTTP_200_OK)
            
@api_view(['GET','PUT','DELETE'])
def poll_get_put_delete(request, pk):
    poll = Polls.objects.get(pk = pk)

    if request.method == 'GET':
        serializer = PollsSerializer(poll)
        return Response(serializer.data, status = status.HTTP_200_OK)
    elif request.method == "PUT":
        serializer = PollsSerializer(data = request.data, instance=poll)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        poll.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)
        


