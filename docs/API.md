# E-Info API
API для веб-платформы E-Info, предоставляющей образовательные услуги дистанционно.

## Version: 1.0.0

**Schemes:** https

---
### /account/register

#### POST
##### Summary

Регистрация ученика

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| body | body | Информация о новом ученике | Yes | [Student](#student) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Успешная регистрация | [Student](#student) |
| 400 | Неверные данные |  |

### /account/login

#### POST
##### Summary

Вход в систему

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| body | body | Данные для входа | Yes | [Login](#login) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Успешный вход | [Token](#token) |
| 400 | Неверные данные |  |

### /account/reset-password

#### POST
##### Summary

Сброс пароля ученика

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| body | body | Сброс пароля ученика | Yes | [Student](#student) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Успешно выслан код на почту | [Student](#student) |
| 400 | Неверные данные |  |

### /account/verify

#### POST
##### Summary

Верфикация ученика

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| body | body | Верфикация ученика | Yes | [Student](#student) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Успешно верифицирован | [Student](#student) |
| 400 | Неверные данные |  |

### /account/profile

#### GET
##### Summary

Получение профиля ученика

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Успешное получение профиля | [Student](#student) |
| 401 | Неавторизованный запрос |  |

#### PUT
##### Summary

Обновление профиля ученика

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| body | body | Новые данные профиля | Yes | [Student](#student) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Успешное обновление профиля | [Student](#student) |
| 400 | Неверные данные |  |
| 401 | Неавторизованный запрос |  |

### /calendar

#### GET
##### Summary

Получение календаря ученика

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Успешное получение календаря | [Calendar](#calendar) |
| 401 | Неавторизованный запрос |  |

### /homework

#### GET
##### Summary

Получение домашних заданий ученика

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Успешное получение домашних заданий | [ [Homework](#homework) ] |
| 401 | Неавторизованный запрос |  |

#### POST
##### Summary

Отправка выполненного домашнего задания

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| body | body | Выполненное домашнее задание | Yes | [Homework](#homework) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Успешная отправка домашнего задания |
| 400 | Неверные данные |
| 401 | Неавторизованный запрос |

### /feedback/new

#### POST
##### Summary

Отправка обратной связи

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| body | body | Сообщение обратной связи | Yes | [Feedback](#feedback) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Успешная отправка обратной связи |
| 400 | Неверные данные |

### /subscriptions

#### GET
##### Summary

Получение списка тарифов

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Успешное получение списка тарифов | [ [Tariff](#tariff) ] |

### /subscriptions/new

#### POST
##### Summary

Запись на курс

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| body | body | Данные для записи на курс | Yes | [Enrollment](#enrollment) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Успешная запись на курс |
| 400 | Неверные данные |
| 401 | Неавторизованный запрос |

### /lessons

#### GET
##### Summary

Получение списка уроков

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Успешное получение списка уроков | [ [Lesson](#lesson) ] |
| 401 | Неавторизованный запрос |  |

### /lessons/[id]

#### GET
##### Summary

Получение данных об конкретном уроке

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Успешное получение об конкретном уроке | object |
| 401 | Неавторизованный запрос |  |

---
### Models

#### Student

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string |  | No |
| email | string |  | No |
| password | string |  | No |

#### Login

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| email | string |  | No |
| password | string |  | No |

#### Token

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| token | string |  | No |

#### Calendar

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| events | [ { **"title"**: string, **"date"**: string, **"time"**: string } ] |  | No |

#### Homework

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| title | string |  | No |
| description | string |  | No |
| deadline | string |  | No |
| file | string |  | No |

#### Feedback

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| message | string |  | No |

#### Tariff

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| title | string |  | No |
| description | string |  | No |
| price | number |  | No |

#### Enrollment

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| tariffId | string |  | No |

#### Lesson

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| title | string |  | No |
| description | string |  | No |
| videoUrl | string |  | No |
