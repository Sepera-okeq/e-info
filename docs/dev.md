# Для разработчиков

## Технологии

### Frontend

- Next.js
- Radix UI
- TailwindCSS

Подробнее можно найти [здесь](/frontend/package.json)

### Backend

- Python
- Django

Подробнее можно найти [здесь](/backend/req.txt)

## Установка и запуск

### Запуск backend

```bash
cd backend
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
DEBUG=True HOST=localhost SECRET_KEY=sonya python manage.py runserver
```

### Работа frontend

#### Работа в live режиме

```bash
cd frontend 
pnpm i
pnpm dev
```

#### Сборка статичной версии

```bash
cd frontend 
pnpm i
pnpm build
```

---