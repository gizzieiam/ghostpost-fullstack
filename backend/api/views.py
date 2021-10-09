from app.models import Post
from api import serializers
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response

class PostViewSet(ModelViewSet):
    serializer_class = serializers.PostSerializer
    queryset = Post.objects.all()

    @action(detail=False)
    def roast(self, request, pk=None):
        getRoasts = Post.objects.filter(roast=True).order_by('-create_time')
        serializer = self.get_serializer(getRoasts, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def boast(self, request, pk=None):
        getBoast = Post.objects.filter(roast=False).order_by('-create_time')
        serializer = self.get_serializer(getBoast, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['post'])
    def likes(self, request, pk=None):
        post = Post.objects.get(id=pk)
        post.likes += 1
        post.save()
        return Response({'status': '+1 likes'})

    @action(detail=True, methods=['post'])
    def dislikes(self, request, pk=None):
        post = Post.objects.get(id=pk)
        post.dislikes += 1
        post.save()
        return Response({'status': '+1 dislikes'})

    @action(detail=False)
    def highest(self, request, pk=None):
        posts = Post.objects.all()
        sort = sorted(posts, key=lambda a: a.voteCount, reverse=True)
        serializer = self.get_serializer(sort, many=True)
        return Response(serializer.data)