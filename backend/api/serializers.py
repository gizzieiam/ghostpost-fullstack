from rest_framework.serializers import HyperlinkedModelSerializer
from app.models import Post


class PostSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Post
        fields = (
            'id',
            'header',
            'text',
            'likes',
            'dislikes',
            'roast',
            'create_time',
            'voteCount'
        )
