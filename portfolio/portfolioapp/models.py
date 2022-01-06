from django.db import models

class Commentaire(models.Model):
    mail = models.CharField(max_length=200)
    commentaire_text = models.CharField(max_length=2000)
    auteur = models.CharField(max_length=100)
    pub_date = models.DateTimeField('date published')
    def __str__(self):
        return self.auteur
# Create your models here.
