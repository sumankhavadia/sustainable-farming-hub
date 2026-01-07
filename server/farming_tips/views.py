from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import FarmingTip
from .serializers import FarmingTipSerializer
import random

@api_view(['GET'])
def daily_tip(request):
    tips = list(FarmingTip.objects.all())  # Get all tips as a list
    if tips:
        tip = random.choice(tips)  # Choose a random tip
        serializer = FarmingTipSerializer(tip)  # Serialize a single tip
        return Response(serializer.data)
    return Response({"message": "No tips available."})
