from django.db import models

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=100)  
    content = models.TextField()
    published_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Student(models.Model):
    name = models.TextField()
    email = models.TextField()
    password = models.TextField()
    tariff = models.ForeignKey('Tariff', on_delete=models.CASCADE, blank=True, null=True)


class Token(models.Model):
    token = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


class Events(models.Model):
    title = models.TextField()
    time = models.DateTimeField(auto_now_add=True)


class Homework(models.Model):
    title = models.TextField()
    description = models.TextField()
    deadline = models.DateTimeField()
    file = models.BinaryField()
    regarding = models.ForeignKey('Lesson', on_delete=models.CASCADE)


class Feedback(models.Model):
    message = models.TextField()
    author = models.ForeignKey('Student', on_delete=models.CASCADE)


class Tariff(models.Model):
    title = models.TextField()
    description = models.TextField()
    price = models.IntegerField()


class Lesson(models.Model):
    title = models.TextField()
    description = models.TextField()
    videoURL = models.TextField()

