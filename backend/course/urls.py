import course.views
import django.urls


urlpatterns = [
    django.urls.path('', course.views.overview, name='course_overview'),
    django.urls.path('<int:pk>/', course.views.introduction, name='course_introduction'),
    django.urls.path('lesson/<int:pk>/', course.views.lesson, name='course_lesson'),
    django.urls.path('task/<int:pk>/', course.views.task, name='course_task'),
    django.urls.path('material/<int:pk>/', course.views.material, name='material'),
    django.urls.path('shop', course.views.shop, name='course_shop'),
    django.urls.path('buy/<int:type_trade>/<int:id_buy>', course.views.buy, name='course_buy'),
]
