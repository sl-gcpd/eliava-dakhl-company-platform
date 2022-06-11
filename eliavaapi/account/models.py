from django.db import models

# Create your models here.
import datetime

from django.contrib.auth.base_user import AbstractBaseUser
from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)
from django.utils import timezone

class CustomUserManager(BaseUserManager):
    def create_user(self, email,firstName,lastName,profilePicture=None,password=None):

        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            firstName=firstName,
            lastName=lastName,
            profilePicture=profilePicture
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, firstName,lastName,password=None):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            email,
            password=password,
            firstName=firstName,
            lastName=lastName
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class CustomUser(AbstractBaseUser):
    email = models.EmailField(max_length=255,unique=True)
    firstName = models.CharField(max_length=255)
    lastName = models.CharField(max_length=255)
    profilePicture = models.ImageField(upload_to='images/', null = True)
    date_of_birth = models.DateField(null=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    objects = CustomUserManager()

    USERNAME_FIELD ='email'
    REQUIRED_FIELDS = ['firstName','lastName']

    def __str__(self):
        return self.firstName+self.lastName


    @property
    def is_staff(self):
        return self.is_admin

