# Разворачивание в производственном режиме

1. Склонируйте данный репозиторий

```bash
git clone <url>
```

2. Установите необходимые пакеты

```bash
apt install python3 nginx
```

3. Установите необходимые зависимости для backend

```bash
cd backend
pip install -r req.txt
```

4.  Запустите в отдельной сессии работу backend части

```bash
cd back
screen -S backend python manage.py runserver
```

5. Соберите frontend часть

Сконфигурируйте значение API сервера в [config.ts](/frontend/config/site.ts)

```bash
cd ..
cd ..

cd frontend
pnpm i
pnpm build
```

6. Настройте Ngnix

Необходимо заменить example.com в [конфиге](/production/nginx/example.conf) на ваш URL сайта, c указанием необходимого порта API, а так же папки, где находися собранная версия frontend части сайта.

