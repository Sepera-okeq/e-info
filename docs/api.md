# E-Info API

# Course

Django приложение содержит следующие представления:

- `overview`
- `introduction`
- `lesson`
- `task`
- `material`
- `shop`
- `buy`

## overview

Этот view возвращает отрендеренный HTML с обзором всех частных и публичных курсов и материалов, доступных для данного пользователя. Он выполняет запросы к базе данных для получения объектов курсов и материалов, а также проводит несколько проверок, чтобы обеспечить возврат только тех объектов, которые актуальны для текущего пользователя.

### URL

    /course/overview/

### HTTP метод

    GET

### Параметры

Не требуются.

### Возврат
Отрендеренный HTML документ.


## introduction

Этот view возвращает HTML-файл с введением в выбранный курс по уникальному идентификатору (pk). Он выполняет запрос к базе данных для получения объекта курса и его уроков, а также проводит несколько проверок, чтобы обеспечить возврат только тех объектов, которые актуальны.

### URL

    /course/introduction/<int:pk>

### HTTP метод

     GET

### Параметры

- pk : Уникальный идентификатор курса. Целое число.

### Возврат
Отрендеренный HTML документ.



## lesson

Этот view возвращает HTML-файл с уроком для выбранного курса с уникальным идентификатором (pk) урока. Он выполняет запрос к базе данных для получения объекта урока и его задач, а также проводит несколько проверок, чтобы обеспечить возврат только тех объектов, которые актуальны.

### URL

    /course/lesson/<int:pk>

### HTTP метод

    GET

### Параметры

- pk : Уникальный идентификатор урока. Целое число.

### Возврат
Отрендеренный HTML документ.



## task

Этот view возвращает отрендеренный HTML для выбранного задания с уникальным идентификатором задания (pk).

### URL

    /course/task/<int:pk>

### HTTP метод

    GET

### Параметры

- pk : Уникальный идентификатор задания. Целое число.

### Возврат
Отрендеренный HTML документ.



## material

Этот view возвращает отрендеренный HTML для выбранного частного материала с уникальным идентификатором материала (pk)

### URL

    /course/material/<int:pk>

### HTTP метод

    GET

### Параметры

- pk : Уникальный идентификатор материала. Целое число.

### Возврат
Отрендеренный HTML документ.



## shop

Этот view возвращает отрендеренный HTML для магазина, где текущий пользователь может купить доступ к частным курсам и материалам. Он выполняет соответствующие запросы к базе данных для получения объектов курсов и материалов и проводит проверки, чтобы обеспечить возврат только тех объектов, которые актуальны для текущего пользователя.

### URL

    /course/shop/

### HTTP метод

    GET

### Параметры

Не требуются.

### Возврат
Отрендеренный HTML документ.



## buy

Этот view обрабатывает действие покупки частного курса или материала.

### URL

    /course/buy/<int:type_trade>/<int:id>

### HTTP метод

    GET

### Параметры

- type_trade : Указывает тип объекта, который покупается. 1 - это курс, 2 - это материал.
- id : Уникальный идентификатор объекта. Целое число.

### Возврат
Отрендеренный HTML документ.


# Users

Django приложение содержит следующие представления:

- `RegisterUser`
- `LoginUser`
- `logout_user`
- `profile`
- `board`

## RegisterUser

Этот класс представления обрабатывает регистрацию нового пользователя. Он принимает форму регистрации и отображает страницу регистрации.

### URL

    /users/register/

### HTTP метод

    POST

### Параметры

Все параметры передаются в теле запроса в виде значений формы регистрации.

### Возврат
Перенаправление на страницу входа в систему при успешной регистрации.



## LoginUser

Этот класс представления обрабатывает вход пользователя в систему. Он принимает форму входа и отображает страницу входа.

### URL

    /users/login/

### HTTP метод

    POST

### Параметры

Все параметры передаются в теле запроса в виде значений формы входа.

### Возврат
Перенаправление на домашнюю страницу при успешном входе.



## logout_user

Этот представление обрабатывает выход пользователя из системы.

### URL

    /users/logout/

### HTTP метод

    GET

### Параметры

Не требуются.

### Возврат
Перенаправление на страницу входа в систему.



## profile

Этот view обрабатывает отображение и обновление профиля пользователя. Он принимает форму обновления профиля и отображает страницу профиля.

### URL

    /users/profile/

### HTTP метод

    GET, POST

### Параметры

Все параметры передаются в теле запроса в виде значений формы обновления профиля.

### Возврат
Отрендеренный HTML документ.



## board

Этот view обрабатывает отображение доски пользователя.

### URL

    /users/board/<str:key>

### HTTP метод

    GET

### Параметры

- key : Уникальный ключ доски. Строка.

### Возврат
Отрендеренный HTML документ.

API Markdown модели для предложенного py файла:

# Models

## Tag
Represents a Tag.

Fields:
- `name` (CharField): Название тега, строка не больше 50 символов, уникальное.
- `background_color` (Colorfield): Цвет фона, по умолчанию `#E94F37`.

Methods:
- `__str__(self) -> str`: returns the tag name.
- `render_tag(self) -> str`: HTML-styled representation of tag.
- `render_tag_outline(self) -> str:` HTML-styled representation of tag outline.

## Course
Represents a Course.

Fields:
- `title` (CharField): Название курса, строка не больше 150 символов, уникальное.
- `lead` (TextField): Лид, строка не больше 250 символов.
- `price` (IntegerField): Цена, по умолчанию 0.
- `introduction` (TextField): Вступление.
- `tags` (ManyToManyField): Теги курса.
- `is_published` (BooleanField): Флаг, показывающий, был ли опубликован курс, по умолчанию истина.
- `private` (BooleanField): Флаг, позволяющий сделать курс закрытым, по умолчанию ложь.
- `access` (ManyToManyField): Пользователи с доступом к курсу.

Methods:
- `__str__(self) -> str`: returns the course title.

## Lesson
Represents a Lesson.

Fields:
- `title` (CharField): Название урока, строка не больше 150 символов.
- `theory` (TextField): Теория урока.
- `course` (ForeignKey): Курс, к которому урок принадлежит.
- `is_published` (BooleanField): Флаг, показывающий, был ли опубликован урок, по умолчанию истина.

Methods:
- `__str__(self) -> str`: returns the lesson title.

## Task
Represents a Task.

Fields:
- `title` (CharField): Название задания, строка не больше 150 символов.
- `difficulty` (IntegerField): Сложность задания, по умолчанию 1.
- `time_limit` (IntegerField): Ограничение времени (в секундах), по умолчанию 1.
- `memory_limit` (IntegerField): Ограничение памяти (в Мб), по умолчанию 64.
- `input_type` (CharField): Формат ввода, по умолчанию 'стандартный ввод или input.txt'.
- `output_type` (CharField): Формат вывода, по умолчанию 'стандартный вывод или output.txt'.
- `text` (TextField): Текст задания.
- `input_format` (TextField): Формат ввода данных.
- `output_format` (TextField): Формат вывода данных.
- `lesson` (ForeignKey): Урок, к которому принадлежит задание.
- `is_published` (BooleanField): Флаг, показывающий, было ли опубликовано задание, по умолчанию истина.
- `solution` (TextField): Решение автора.

Methods:
- `__str__(self) -> str`: returns the task title.
- `get_time_limit(self) -> str`: returns time limit in seconds.
- `get_memory_limit(self) -> str`: returns memory limit in Mb.

## Example
Represents an Example.

Fields:
- `input_data` (TextField): Вводные данные.
- `output_data` (TextField): Выходные данные.
- `task` (ForeignKey): Задание, к которому принадлежит пример.
- `is_published` (BooleanField): Флаг, показывающий, был ли опубликован пример, по умолчанию истина.

Methods:
- `__str__(self) -> str`: returns the example ID.

## PrivateMaterial
Represents a Private Material.

Fields:
- `title` (CharField): Название материала, строка не больше 150 символов.
- `text` (TextField): Текст материала.
- `lead` (TextField): Лид, строка не больше 250 символов.
- `price` (IntegerField): Цена, по умолчанию 0.
- `is_published` (BooleanField): Флаг, показывающий, был ли опубликован материал, по умолчанию истина.
- `access` (ManyToManyField): Пользователи с доступом к материалу.

Methods:
- `__str__(self) -> str`: returns the private material title.


