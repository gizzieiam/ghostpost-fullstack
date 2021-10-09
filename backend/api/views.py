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