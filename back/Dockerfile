FROM python:3.8

RUN python3 -m pip install django\
 djangorestframework\
  mysqlclient\
   django-cors-headers

WORKDIR /gomushin

COPY . . 

CMD ["python3", "manage.py", "runserver", "0:8000"]

EXPOSE 8000