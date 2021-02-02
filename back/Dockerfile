FROM python:3.8

RUN python3 -m pip install django djangorestframework mysqlclient

WORKDIR /gomushin

COPY . . 

WORKDIR /gomushin/core

CMD ["python3", "manage.py", "runserver", "0:8000"]

EXPOSE 8000