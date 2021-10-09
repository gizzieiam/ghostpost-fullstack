from rest_framework.serializers import HyperlinkedModelSerializer
from app.models import Post


class PostSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Post
        fields = (
            'id',
            'text',
            'likes',
            'dislikes',
            'roast',
            'create_time',
            'voteCount'
        )
