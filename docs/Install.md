# Установка и развертывание проекта

1. Установите необходимые пакеты

```
apt update
apt install git nginx python3 pip
```

2. Склонируйте репозиторий

```
git clone https://github.com/Sepera-okeq/e-info.git
```

3. Установите параметры конфигурации Nginx

```
cd production
vim example.conf
cp example.com /etc/nginx/site-enabled/<name-site>.conf
```

4. Соберите проект

```
cd backend
python ./manage.py migrate
python ./manage.py runserver
```

5. Откройте URL сайта, который был сконфигурирован в пункте 3.


