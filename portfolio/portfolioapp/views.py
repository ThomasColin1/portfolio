from django.shortcuts import render
from .models import Commentaire
import datetime
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

def general(request):
    latest_comm_list = Commentaire.objects.order_by('-pub_date')[:5]
    context = {'latest_comm_list': latest_comm_list}
    return render(request, 'portfolioapp/index.html', context)
# Create your views here.

def envoi(request):

    comm_text = request.POST.get('comm','NoText')
    comm_auteur = request.POST.get('commaut','Guest')
    comm_mail = request.POST.get('commmail','Guest')
    comm_date = datetime.datetime.now().date()
#    try:
    comm = Commentaire(auteur=comm_auteur,commentaire_text=comm_text,mail=comm_mail,pub_date=comm_date)
#    except (comm_text==''):
#        # Redisplay the question voting form.
#        return render(request, 'portfolio/index.html', {
#            'error_message': "You didn't select a message.",
#        })
#    else:
    comm.save()
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
    return HttpResponseRedirect(reverse('portfolioapp:general'))


